import React, { useState } from 'react'
import { Helmet } from 'react-helmet'

import AppNavbar8 from '../components/navbar8'
import AppHero17 from '../components/hero17'
import AppFeatures24 from '../components/features24'
import AppCta26 from '../components/cta26'
import AppFeatures25 from '../components/features25'
import AppPricing14 from '../components/pricing14'
import AppSteps2 from '../components/steps2'
import AppTestimonial17 from '../components/testimonial17'
import AppContact10 from '../components/contact10'
import AppFooter4 from '../components/footer4'
import './CV.css'

export default function CV() {
  const [raws2q1, setRaws2q1] = useState(' ')

  return (
    <div class="home-container">
    <app-navbar8>
      <template v-slot:page4Description>
        <div class="home-fragment100">
          <span class="home-text100">
            Get in touch with us for any inquiries or support
          </span>
        </div>
      </template>
      <template v-slot:action1>
        <div class="home-fragment101">
          <span class="home-text101">Sign Up</span>
        </div>
      </template>
      <template v-slot:link2>
        <div class="home-fragment102">
          <span class="home-text102">#about</span>
        </div>
      </template>
      <template v-slot:page1>
        <div class="home-fragment103"><span class="home-text103">Home</span></div>
      </template>
      <template v-slot:link1>
        <div class="home-fragment104">
          <span class="home-text104">#home</span>
        </div>
      </template>
      <template v-slot:page4>
        <div class="home-fragment105">
          <span class="home-text105">Contact</span>
        </div>
      </template>
      <template v-slot:page2>
        <div class="home-fragment106">
          <span class="home-text106">About</span>
        </div>
      </template>
      <template v-slot:link4>
        <div class="home-fragment107">
          <span class="home-text107">#contact</span>
        </div>
      </template>
      <template v-slot:page1Description>
        <div class="home-fragment108">
          <span class="home-text108">
            Welcome to our CV builder for IT engineers
          </span>
        </div>
      </template>
      <template v-slot:page2Description>
        <div class="home-fragment109">
          <span class="home-text109">
            Learn more about our innovative CV templates
          </span>
        </div>
      </template>
      <template v-slot:link3>
        <div class="home-fragment110">
          <span class="home-text110">#services</span>
        </div>
      </template>
      <template v-slot:page3>
        <div class="home-fragment111">
          <span class="home-text111">Services</span>
        </div>
      </template>
      <template v-slot:page3Description>
        <div class="home-fragment112">
          <span class="home-text112">
            Discover the services we offer for creating standout resumes
          </span>
        </div>
      </template>
      <template v-slot:action2>
        <div class="home-fragment113">
          <span class="home-text113">Get Started</span>
        </div>
      </template>
    </app-navbar8>
    <app-hero17>
      <template v-slot:action2>
        <div class="home-fragment114">
          <span class="home-text114">Learn More</span>
        </div>
      </template>
      <template v-slot:action1>
        <div class="home-fragment115">
          <span class="home-text115">Get Started</span>
        </div>
      </template>
      <template v-slot:heading1>
        <div class="home-fragment116">
          <span class="home-text116">
            Create an Outstanding CV for Computer Engineer
          </span>
        </div>
      </template>
      <template v-slot:content1>
        <div class="home-fragment117">
          <span class="home-text117">
            Stand out from the crowd with a unique and visually appealing CV that
            showcases your skills and experience as a computer engineer.
          </span>
        </div>
      </template>
    </app-hero17>
    <app-features24>
      <template v-slot:feature3Description>
        <div class="home-fragment118">
          <span class="home-text118">
            Interactive animations to showcase skills
          </span>
        </div>
      </template>
      <template v-slot:feature3Title>
        <div class="home-fragment119">
          <span class="home-text119">Dynamic Visuals</span>
        </div>
      </template>
      <template v-slot:feature2Description>
        <div class="home-fragment120">
          <span class="home-text120">
            Customizable sections for detailed experience
          </span>
        </div>
      </template>
      <template v-slot:feature1Title>
        <div class="home-fragment121">
          <span class="home-text121">Unique Templates</span>
        </div>
      </template>
      <template v-slot:feature1Description>
        <div class="home-fragment122">
          <span class="home-text122">Stand out with a visually appealing CV</span>
        </div>
      </template>
      <template v-slot:feature2Title>
        <div class="home-fragment123">
          <span class="home-text123">Tailored Content</span>
        </div>
      </template>
    </app-features24>
    <app-cta26>
      <template v-slot:heading1>
        <div class="home-fragment124">
          <span class="home-text124">
            Create an eye-catching CV for computer engineer
          </span>
        </div>
      </template>
      <template v-slot:content1>
        <div class="home-fragment125">
          <span class="home-text125">
            Stand out from the crowd with a unique and visually appealing resume
            that showcases your skills and experience.
          </span>
        </div>
      </template>
      <template v-slot:action1>
        <div class="home-fragment126">
          <span class="home-text126">Get started now</span>
        </div>
      </template>
    </app-cta26>
    <app-features25>
      <template v-slot:feature3Description>
        <div class="home-fragment127">
          <span class="home-text127">
            Impress recruiters with a tech-savvy design that reflects your
            expertise in the field of computer engineering.
          </span>
        </div>
      </template>
      <template v-slot:feature1Description>
        <div class="home-fragment128">
          <span class="home-text128">
            Choose from a variety of interactive CV templates designed
            specifically for computer engineers.
          </span>
        </div>
      </template>
      <template v-slot:feature2Title>
        <div class="home-fragment129">
          <span class="home-text129">Dynamic Visuals</span>
        </div>
      </template>
      <template v-slot:feature1Title>
        <div class="home-fragment130">
          <span class="home-text130">Interactive CV Templates</span>
        </div>
      </template>
      <template v-slot:feature2Description>
        <div class="home-fragment131">
          <span class="home-text131">
            Enhance your CV with dynamic visuals and animations to showcase your
            skills and experience.
          </span>
        </div>
      </template>
      <template v-slot:feature3Title>
        <div class="home-fragment132">
          <span class="home-text132">Tech-Savvy Design</span>
        </div>
      </template>
    </app-features25>
    <app-pricing14>
      <template v-slot:plan3Price>
        <div class="home-fragment133">
          <span class="home-text133">Premium Plan - $29.99/month</span>
        </div>
      </template>
      <template v-slot:plan3Action>
        <div class="home-fragment134">
          <span class="home-text134">Sign up now</span>
        </div>
      </template>
      <template v-slot:plan11>
        <div class="home-fragment135">
          <span class="home-text135">Basic plan</span>
        </div>
      </template>
      <template v-slot:plan1Action>
        <div class="home-fragment136">
          <span class="home-text136">Sign up now</span>
        </div>
      </template>
      <template v-slot:plan31>
        <div class="home-fragment137">
          <span class="home-text137">Enterprise plan</span>
        </div>
      </template>
      <template v-slot:plan3Feature41>
        <div class="home-fragment138">
          <span class="home-text138">Feature text goes here</span>
        </div>
      </template>
      <template v-slot:plan1Feature2>
        <div class="home-fragment139">
          <span class="home-text139">Customizable designs</span>
        </div>
      </template>
      <template v-slot:plan2Feature11>
        <div class="home-fragment140">
          <span class="home-text140">Feature text goes here</span>
        </div>
      </template>
      <template v-slot:plan3Feature51>
        <div class="home-fragment141">
          <span class="home-text141">Feature text goes here</span>
        </div>
      </template>
      <template v-slot:plan2Feature41>
        <div class="home-fragment142">
          <span class="home-text142">Feature text goes here</span>
        </div>
      </template>
      <template v-slot:plan2Feature2>
        <div class="home-fragment143">
          <span class="home-text143">Priority email support</span>
        </div>
      </template>
      <template v-slot:plan3Feature21>
        <div class="home-fragment144">
          <span class="home-text144">Feature text goes here</span>
        </div>
      </template>
      <template v-slot:plan2Feature4>
        <div class="home-fragment145">
          <span class="home-text145">Feature text goes here</span>
        </div>
      </template>
      <template v-slot:plan2Yearly>
        <div class="home-fragment146">
          <span class="home-text146">$199.99/year</span>
        </div>
      </template>
      <template v-slot:plan1Action1>
        <div class="home-fragment147">
          <span class="home-text147">Get started</span>
        </div>
      </template>
      <template v-slot:plan2Action>
        <div class="home-fragment148">
          <span class="home-text148">Sign up now</span>
        </div>
      </template>
      <template v-slot:plan3Feature1>
        <div class="home-fragment149">
          <span class="home-text149">All Pro features</span>
        </div>
      </template>
      <template v-slot:plan2Feature3>
        <div class="home-fragment150">
          <span class="home-text150">Access to premium templates</span>
        </div>
      </template>
      <template v-slot:plan1Price1>
        <div class="home-fragment151">
          <span class="home-text151">$200/yr</span>
        </div>
      </template>
      <template v-slot:plan2>
        <div class="home-fragment152">
          <span class="home-text152">Business plan</span>
        </div>
      </template>
      <template v-slot:plan2Feature21>
        <div class="home-fragment153">
          <span class="home-text153">Feature text goes here</span>
        </div>
      </template>
      <template v-slot:plan2Action1>
        <div class="home-fragment154">
          <span class="home-text154">Get started</span>
        </div>
      </template>
      <template v-slot:plan3Feature2>
        <div class="home-fragment155">
          <span class="home-text155">One-click color themes</span>
        </div>
      </template>
      <template v-slot:content1>
        <div class="home-fragment156">
          <span class="home-text156">Choose the perfect plan for you</span>
        </div>
      </template>
      <template v-slot:plan2Feature1>
        <div class="home-fragment157">
          <span class="home-text157">All Basic features</span>
        </div>
      </template>
      <template v-slot:heading1>
        <div class="home-fragment158">
          <span class="home-text158">Pricing plan</span>
        </div>
      </template>
      <template v-slot:plan3Feature31>
        <div class="home-fragment159">
          <span class="home-text159">Feature text goes here</span>
        </div>
      </template>
      <template v-slot:plan1>
        <div class="home-fragment160">
          <span class="home-text160">Basic plan</span>
        </div>
      </template>
      <template v-slot:plan21>
        <div class="home-fragment161">
          <span class="home-text161">Business plan</span>
        </div>
      </template>
      <template v-slot:plan1Feature11>
        <div class="home-fragment162">
          <span class="home-text162">Feature text goes here</span>
        </div>
      </template>
      <template v-slot:plan1Feature21>
        <div class="home-fragment163">
          <span class="home-text163">Feature text goes here</span>
        </div>
      </template>
      <template v-slot:plan3Feature5>
        <div class="home-fragment164">
          <span class="home-text164">Feature text goes here</span>
        </div>
      </template>
      <template v-slot:plan2Yearly1>
        <div class="home-fragment165">
          <span class="home-text165">or $29 monthly</span>
        </div>
      </template>
      <template v-slot:plan2Price>
        <div class="home-fragment166">
          <span class="home-text166">Pro Plan - $19.99/month</span>
        </div>
      </template>
      <template v-slot:plan3Yearly1>
        <div class="home-fragment167">
          <span class="home-text167">or $49 monthly</span>
        </div>
      </template>
      <template v-slot:plan2Feature31>
        <div class="home-fragment168">
          <span class="home-text168">Feature text goes here</span>
        </div>
      </template>
      <template v-slot:plan3Feature11>
        <div class="home-fragment169">
          <span class="home-text169">Feature text goes here</span>
        </div>
      </template>
      <template v-slot:plan1Yearly1>
        <div class="home-fragment170">
          <span class="home-text170">or $20 monthly</span>
        </div>
      </template>
      <template v-slot:plan2Price1>
        <div class="home-fragment171">
          <span class="home-text171">$299/yr</span>
        </div>
      </template>
      <template v-slot:plan3Yearly>
        <div class="home-fragment172">
          <span class="home-text172">$299.99/year</span>
        </div>
      </template>
      <template v-slot:plan3Feature4>
        <div class="home-fragment173">
          <span class="home-text173">Feature text goes here</span>
        </div>
      </template>
      <template v-slot:plan3Price1>
        <div class="home-fragment174">
          <span class="home-text174">$499/yr</span>
        </div>
      </template>
      <template v-slot:plan1Feature31>
        <div class="home-fragment175">
          <span class="home-text175">Feature text goes here</span>
        </div>
      </template>
      <template v-slot:plan1Feature3>
        <div class="home-fragment176">
          <span class="home-text176">Download as PDF or share online</span>
        </div>
      </template>
      <template v-slot:plan1Yearly>
        <div class="home-fragment177">
          <span class="home-text177">$99.99/year</span>
        </div>
      </template>
      <template v-slot:plan1Feature1>
        <div class="home-fragment178">
          <span class="home-text178">Unlimited CV templates</span>
        </div>
      </template>
      <template v-slot:plan3Feature3>
        <div class="home-fragment179">
          <span class="home-text179">Animated designs</span>
        </div>
      </template>
      <template v-slot:content2>
        <div class="home-fragment180">
          <span class="home-text180">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            <span v-html="raws2q1"></span>
          </span>
        </div>
      </template>
      <template v-slot:plan3Action1>
        <div class="home-fragment181">
          <span class="home-text181">Get started</span>
        </div>
      </template>
      <template v-slot:plan1Price>
        <div class="home-fragment182">
          <span class="home-text182">Basic Plan - $9.99/month</span>
        </div>
      </template>
      <template v-slot:plan3>
        <div class="home-fragment183">
          <span class="home-text183">Enterprise plan</span>
        </div>
      </template>
    </app-pricing14>
    <app-steps2>
      <template v-slot:step1Description>
        <div class="home-fragment184">
          <span class="home-text184">
            Select a visually appealing template for your CV that suits your style
            and personality.
          </span>
        </div>
      </template>
      <template v-slot:step3Description>
        <div class="home-fragment185">
          <span class="home-text185">
            Make your CV stand out by adding subtle animations to highlight key
            sections and engage the viewer.
          </span>
        </div>
      </template>
      <template v-slot:step2Title>
        <div class="home-fragment186">
          <span class="home-text186">Add Your Information</span>
        </div>
      </template>
      <template v-slot:step2Description>
        <div class="home-fragment187">
          <span class="home-text187">
            Fill in your personal details, education, work experience, skills, and
            any other relevant information.
          </span>
        </div>
      </template>
      <template v-slot:step1Title>
        <div class="home-fragment188">
          <span class="home-text188">Choose a Template</span>
        </div>
      </template>
      <template v-slot:step3Title>
        <div class="home-fragment189">
          <span class="home-text189">Enhance with Animations</span>
        </div>
      </template>
      <template v-slot:step4Description>
        <div class="home-fragment190">
          <span class="home-text190">
            Preview your animated CV, make any necessary edits, and then download
            it in PDF format to impress potential employers.
          </span>
        </div>
      </template>
      <template v-slot:step4Title>
        <div class="home-fragment191">
          <span class="home-text191">Review and Download</span>
        </div>
      </template>
    </app-steps2>
    <app-testimonial17>
      <template v-slot:author2Position>
        <div class="home-fragment192">
          <span class="home-text192">IT Project Manager</span>
        </div>
      </template>
      <template v-slot:author1Position>
        <div class="home-fragment193">
          <span class="home-text193">Senior Software Engineer</span>
        </div>
      </template>
      <template v-slot:author1Name>
        <div class="home-fragment194">
          <span class="home-text194">John Doe</span>
        </div>
      </template>
      <template v-slot:author3Name>
        <div class="home-fragment195">
          <span class="home-text195">David Brown</span>
        </div>
      </template>
      <template v-slot:review2>
        <div class="home-fragment196">
          <span class="home-text196">
            Creating a CV has never been easier. The interactive elements helped
            me showcase my skills effectively.
          </span>
        </div>
      </template>
      <template v-slot:author2Name>
        <div class="home-fragment197">
          <span class="home-text197">Jane Smith</span>
        </div>
      </template>
      <template v-slot:author4Position>
        <div class="home-fragment198">
          <span class="home-text198">Data Analyst</span>
        </div>
      </template>
      <template v-slot:author4Name>
        <div class="home-fragment199">
          <span class="home-text199">Emily Johnson</span>
        </div>
      </template>
      <template v-slot:content1>
        <div class="home-fragment200">
          <span class="home-text200">
            I used this platform to create my CV, and the results were amazing.
            The animations and visuals really made my CV stand out.
          </span>
        </div>
      </template>
      <template v-slot:author3Position>
        <div class="home-fragment201">
          <span class="home-text201">Software Developer</span>
        </div>
      </template>
      <template v-slot:review1>
        <div class="home-fragment202">
          <span class="home-text202">
            The best CV builder for tech professionals!
          </span>
        </div>
      </template>
      <template v-slot:heading1>
        <div class="home-fragment203">
          <span class="home-text203">Testimonials</span>
        </div>
      </template>
      <template v-slot:review3>
        <div class="home-fragment204">
          <span class="home-text204">
            Impressive designs and easy-to-use interface. I highly recommend it to
            all IT professionals.
          </span>
        </div>
      </template>
      <template v-slot:review4>
        <div class="home-fragment205">
          <span class="home-text205">
            I was able to create a visually appealing CV that got me noticed by
            top tech companies. Thank you for this amazing tool!
          </span>
        </div>
      </template>
    </app-testimonial17>
    <app-contact10>
      <template v-slot:content1>
        <div class="home-fragment206">
          <span class="home-text206">
            Feel free to reach out to me for any inquiries or opportunities.
          </span>
        </div>
      </template>
      <template v-slot:location1Description>
        <div class="home-fragment207">
          <span class="home-text207">
            Drop me an email and I&apos;ll get back to you as soon as possible.
          </span>
        </div>
      </template>
      <template v-slot:heading1>
        <div class="home-fragment208">
          <span class="home-text208">Contact Me</span>
        </div>
      </template>
      <template v-slot:location2Description>
        <div class="home-fragment209">
          <span class="home-text209">
            You can also give me a call during business hours.
          </span>
        </div>
      </template>
      <template v-slot:location1>
        <div class="home-fragment210">
          <span class="home-text210">Email: example@email.com</span>
        </div>
      </template>
      <template v-slot:location2>
        <div class="home-fragment211">
          <span class="home-text211">Phone: +1234567890</span>
        </div>
      </template>
    </app-contact10>
    <app-footer4>
      <template v-slot:link5>
        <div class="home-fragment212"><span class="home-text212">Blog</span></div>
      </template>
      <template v-slot:link3>
        <div class="home-fragment213">
          <span class="home-text213">Portfolio</span>
        </div>
      </template>
      <template v-slot:link1>
        <div class="home-fragment214">
          <span class="home-text214">About Us</span>
        </div>
      </template>
      <template v-slot:termsLink>
        <div class="home-fragment215">
          <span class="home-text215">Terms of Use</span>
        </div>
      </template>
      <template v-slot:link2>
        <div class="home-fragment216">
          <span class="home-text216">Contact</span>
        </div>
      </template>
      <template v-slot:link4>
        <div class="home-fragment217">
          <span class="home-text217">Services</span>
        </div>
      </template>
      <template v-slot:cookiesLink>
        <div class="home-fragment218">
          <span class="home-text218">Cookies Policy</span>
        </div>
      </template>
      <template v-slot:privacyLink>
        <div class="home-fragment219">
          <span class="home-text219">Privacy Policy</span>
        </div>
      </template>
    </app-footer4>
  </div>
    // <div>
    //   <Helmet>
    //     <title>Tight Boiling Sandpiper</title>
    //     <meta property="og:title" content="Tight Boiling Sandpiper" />
    //   </Helmet>

    //   <AppNavbar8 />
    //   <AppHero17 />
    //   <AppFeatures24 />
    //   <AppCta26 />
    //   <AppFeatures25 />
    //   <AppPricing14 />
    //   <AppSteps2 />
    //   <AppTestimonial17 />
    //   <AppContact10 />
    //   <AppFooter4 />
    // </div>
  )
}