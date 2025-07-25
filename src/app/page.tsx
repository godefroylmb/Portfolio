import Card from "@/pages/components/card";
import Profile from "@/pages/components/profile";

export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr_20px] items-center justify-items-center min-h-screen px-8 sm:px-20 pb-20 gap-y-8 gap-x-16 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Profile />

        <h2 className="text-xl font-semibold text-[#1c1c1f] mt-1 sm:mt-2">
          Some of my projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 -mt-6">
          <Card
            name="Ladybug classification"
            description="A classification project to distinguish between European and Asian ladybugs using RGB and segmented images. Features were extracted manually, and interpretable models like decision trees achieved up to 94% accuracy."
            githubUrl="https://github.com/godefroylmb/Ladybug/tree/main/ladybug"
            language="Python"
            stack="Pandas, Scikit-learn, Matplotlib"
          />
          <Card
            name="Billboard scraper"
            description="An automated Airflow pipeline that scrapes weekly Billboard chart data and uploads it to Kaggle. Originally built for a data engineering project, it ensures up-to-date, structured music chart datasets."
            githubUrl="https://github.com/godefroylmb/Billboard"
            websiteUrl="https://www.kaggle.com/datasets/ludmin/billboard"
            language="Python"
            stack="Airflow, BeautifulSoup, Pandas"
          />
          <Card
            name="Fairness blog"
            description="A concise article that interprets and explains the concepts of ROC and AUC, using insights from a research paper, with emphasis on their implications for fairness in machine learning."
            githubUrl="https://github.com/louise-davy/responsible-ai-datascience-ipParis.github.io"
            websiteUrl="https://responsible-ai-datascience-ipparis.github.io/posts/lambert-davy/"
            language="Hugo"
          />
        </div>
      </main>

      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center" />
    </div>
  );
}
