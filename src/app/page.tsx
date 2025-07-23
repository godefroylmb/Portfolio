import Card from "@/pages/components/card";
import Profile from "@/pages/components/profile";
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Profile />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <Card name="Ladybug classification" description="A classification project to distinguish between European and Asian ladybugs using RGB and segmented images. Features were extracted manually, and interpretable models like decision trees achieved up to 94% accuracy." githubUrl="https://github.com/godefroylmb/Ladybug/tree/main/ladybug" />
          <Card name="Billboard scraper" description="An automated Airflow pipeline that scrapes weekly Billboard chart data and uploads it to Kaggle. Originally built for a data engineering project, it ensures up-to-date, structured music chart datasets." githubUrl="https://github.com/godefroylmb/Billboard" websiteUrl="https://www.kaggle.com/datasets/ludmin/billboard" />
        </div>
        
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
      </footer>
    </div>
  );
}
