import Link from 'next/link'
import React from 'react'

export default function Aboutpage() {
  return (
    <div>
<main >
      <div className="max-w-4xl mx-auto px-6 py-12 md:py-20">
        
       
        {/* Page Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-serif">
          About The Dragon News
        </h1>

        {/* Content Section */}
        <div className="space-y-6 text-gray-700 text-base md:text-lg leading-relaxed">
          <p>
            Welcome to <strong>The Dragon News</strong>, your number one source for all current events, politics, sports, and entertainment. We are dedicated to providing you the very best of daily news, with an emphasis on truth, neutrality, and timely delivery.
          </p>
          
          <p>
            When we first started out, our passion for &quot;Journalism Without Fear or Favour&quot; drove us to start our own news portal so that we can offer you the most authentic news from around the world.
          </p>

          {/* Core Values Box */}
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm border border-gray-200 my-10">
            <h2 className="text-2xl font-semibold text-gray-900 mb-5">Our Core Values</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-red-500 font-bold">&#10003;</span>
                <span><strong>Integrity:</strong> We report the truth without manipulation or bias.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 font-bold">&#10003;</span>
                <span><strong>Independence:</strong> We are completely free from political or corporate influence.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 font-bold">&#10003;</span>
                <span><strong>Accuracy:</strong> Fact-checking is at the absolute heart of our journalism.</span>
              </li>
            </ul>
          </div>

          <p>
            We hope you enjoy our news portal as much as we enjoy offering the latest updates to you. If you have any questions or comments, please don&apos;t hesitate to contact us.
          </p>
        </div>

        {/* Bottom copyright text */}
        <div className="mt-16 pt-8 border-t border-gray-200 text-sm text-gray-500 text-center">
          &copy; {new Date().getFullYear()} The Dragon News. All rights reserved.
        </div>

      </div>
    </main>
    </div>
  )
}
