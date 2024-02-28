import React from 'react';
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

interface PageProps { }

export const metadata: Metadata = {
  title: "Privacy Policy - Math Quiz Game",
  description: "This is the privacy policy for the Math Quiz Game app.",
  // other metadata
};

const Page: React.FC<PageProps> = () => {
  return (
    <section id="privacy-policy" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="w-full py-12 lg:py-24 xl:py-32">
        <div className="container px-4 md:px-6 space-y-8">
          <div className="space-y-2 text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl">Privacy Policy</h1>
            <p className="text-center max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Last updated: [Insert Last Updated Date]
            </p>
          </div>
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Introduction</h2>
              <p className="text-gray-500 dark:text-gray-400">
                Welcome to the Privacy Policy for the Math Quiz Game app. This Privacy Policy is designed to inform you about the types of information that we may collect from you when you use our app, how that information may be used, and how we protect your information. We encourage you to read this Privacy Policy carefully.
              </p>
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Information Collection</h2>
              <p className="text-gray-500 dark:text-gray-400">
                The Math Quiz Game app does not collect any personal information from its users. We do not require you to provide any personal information to use the app.
              </p>
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Third-Party Services</h2>
              <p className="text-gray-500 dark:text-gray-400">
                The Math Quiz Game app uses the following third-party services:
              </p>
              <ul className="list-disc pl-8">
                <li>Google Play Services: Used for app distribution and functionality on Android devices.</li>
                <li>AdMob: Used to display ads within the app.</li>
                <li>Google Analytics for Firebase: Used to collect anonymous analytics data to help us understand how users interact with the app.</li>
              </ul>
              <p className="text-gray-500 dark:text-gray-400">
                Please note that while these services may collect certain information for their own purposes, we do not have access to or control over how they collect or use this information. We encourage you to review the privacy policies of these services for more information.
              </p>
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Data Security</h2>
              <p className="text-gray-500 dark:text-gray-400">
                We take the security of your information seriously and have implemented measures to protect your information from unauthorized access, disclosure, alteration, or destruction. However, please be aware that no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee the absolute security of your information.
              </p>
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Contact Information</h2>
              <p className="text-gray-500 dark:text-gray-400">
                If you have any questions or concerns about this Privacy Policy or our practices regarding your personal information, please contact us at crazyostudio@gmail.com   
              </p>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Page;
