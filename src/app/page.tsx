export const dynamic = "force-dynamic";

import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export default async function Home() {
  return (
    <main className="flex flex-col items-center w-full pt-2 pb-8 gap-8">
      <div className="max-w-[800px] w-full px-4 sm:px-6 md:px-8">
        <h1 className="font-bold text-4xl tracking-tighter py-4">
          ELITE PERFORMANCE COACHING
        </h1>
        <Image
          src="/ranger_blur.png"
          alt="Ranger"
          width={800}
          height={400}
          className="w-full h-auto rounded-lg"
        />

        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Am I a Good Fit?</h2>
          <p>
            Our coaching is ideal for ambitious professionals and athletes who:
          </p>
          <ul className="list-disc pl-6 mt-2">
            <li>Are committed to achieving exceptional results</li>
            <li>Seek personalized guidance and accountability</li>
            <li>Want to optimize their performance in work and life</li>
          </ul>
        </section>

        <Separator className="my-8" />

        <section>
          <h2 className="text-2xl font-semibold mb-4">Background</h2>
          <p>
            With over a decade of experience in high-performance environments,
            our coaches bring a unique blend of technical expertise and
            leadership skills. Our background includes:
          </p>
          <ul className="list-disc pl-6 mt-2">
            <li>Technical Program Management in large-scale data systems</li>
            <li>Military leadership experience</li>
            <li>Expertise in performance optimization and data analytics</li>
          </ul>
        </section>

        <Separator className="my-8" />

        <section>
          <h2 className="text-2xl font-semibold mb-4">Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-100 p-4 rounded-lg">
              <h3 className="font-semibold">Tech Executive</h3>
              <p>Increased team productivity by 40% in 6 months</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg">
              <h3 className="font-semibold">Elite Athlete</h3>
              <p>
                Achieved personal best in marathon, cutting 15 minutes off time
              </p>
            </div>
          </div>
        </section>

        <Separator className="my-8" />

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            Clients We've Worked With
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Image
              src="/client-logo-1.png"
              alt="Client 1"
              width={100}
              height={50}
            />
            <Image
              src="/client-logo-2.png"
              alt="Client 2"
              width={100}
              height={50}
            />
            <Image
              src="/client-logo-3.png"
              alt="Client 3"
              width={100}
              height={50}
            />
          </div>
        </section>

        <Separator className="my-8" />

        <section>
          <h2 className="text-2xl font-semibold mb-4">What Clients Say</h2>
          <blockquote className="italic bg-gray-100 p-4 rounded-lg">
            "The coaching I received was transformative. It helped me break
            through barriers and achieve goals I never thought possible."
            <footer className="text-right mt-2">- Sarah K., CEO</footer>
          </blockquote>
        </section>

        <Separator className="my-8" />

        <section>
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border p-4 rounded-lg">
              <h3 className="font-semibold">Basic Package</h3>
              <p className="text-xl mt-2">$500/month</p>
              <ul className="list-disc pl-6 mt-2">
                <li>2 coaching sessions per month</li>
                <li>Email support</li>
                <li>Personalized action plan</li>
              </ul>
            </div>
            <div className="border p-4 rounded-lg">
              <h3 className="font-semibold">Premium Package</h3>
              <p className="text-xl mt-2">$1000/month</p>
              <ul className="list-disc pl-6 mt-2">
                <li>4 coaching sessions per month</li>
                <li>Unlimited email and chat support</li>
                <li>Customized performance tracking</li>
              </ul>
            </div>
          </div>
        </section>

        <div className="mt-8 flex justify-center gap-4">
          <Link
            href="/schedule-call"
            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Schedule a Consultation
          </Link>
          <Link
            href="/contact"
            className="bg-gray-200 text-gray-800 px-6 py-2 rounded-lg hover:bg-gray-300 transition-colors"
          >
            Learn More
          </Link>
        </div>
      </div>
    </main>
  );
}
