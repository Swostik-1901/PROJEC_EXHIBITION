# core/management/commands/import_dsa.py
import csv
from django.core.management.base import BaseCommand
from core.models import Company, DSAQuestion


class Command(BaseCommand):
    help = "Import DSA questions from a company-wise CSV file"

    def add_arguments(self, parser):
        parser.add_argument("company_name", type=str, help="Exact name of the Company in the database")
        parser.add_argument("csv_path", type=str, help="Path to the CSV file")

    def handle(self, *args, **options):
        company_name = options["company_name"]
        csv_path = options["csv_path"]

        try:
            company = Company.objects.get(name__iexact=company_name)
        except Company.DoesNotExist:
            self.stdout.write(self.style.ERROR(f"Company '{company_name}' not found. Add it in admin first."))
            return

        created_count = 0
        skipped_count = 0

        with open(csv_path, newline="", encoding="utf-8") as f:
            reader = csv.DictReader(f)
            for row in reader:
                title = row.get("Title", "").strip()
                url = row.get("Link", "").strip()
                difficulty_raw = row.get("Difficulty", "").strip().capitalize()
                topic = row.get("Topics", "").strip()
                try:
                    frequency = float(row.get("Frequency", 0) or 0)
                except ValueError:
                    frequency = 0

                if not title or not url:
                    skipped_count += 1
                    continue

                # avoid duplicate entries for the same company + title
                if DSAQuestion.objects.filter(company=company, title=title).exists():
                    skipped_count += 1
                    continue

                DSAQuestion.objects.create(
                    company=company,
                    title=title,
                    difficulty=difficulty_raw if difficulty_raw in ["Easy", "Medium", "Hard"] else "Medium",
                    url=url,
                    topic=topic,
                    frequency=frequency,
                )
                created_count += 1

        self.stdout.write(self.style.SUCCESS(
            f"Done. Created {created_count} questions for {company.name}. Skipped {skipped_count} (duplicates/invalid)."
        ))