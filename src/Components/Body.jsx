// import React from 'react'
import { useState } from 'react';
import { FaArrowRight, FaGithub } from "react-icons/fa";


function Body() {

  const [formStatus, setFormStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/YOUR_ID", {
        method: "POST",
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setFormStatus('Thanks for your submission!');
        form.reset();
      } else {
        setFormStatus('Oops! There was a problem submitting your form');
      }
    } catch {
      setFormStatus('Oops! There was a problem submitting your form');
    }
  };

  return (
    <>

    {/*----> Hero Section <>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>*/}

    <div className="space-y-16 lg:space-y-20 mb-16 sm:mt-2 ">
      <div className="flex items-center justify-center">
        <div className="border-2 w-60 h-w-80 border-slate-100 shadow-xl rounded-full overflow-hidden animate-blob">
          <img type="image/jpg" src="/src/assets/profilePic.jpg" alt="profile" className="w-full h-full object-cover" />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center space-y-6 ">
        <h1 className="text-3xl text-center font-bold font-playFair md:text-4xl lg:text-5xl px-10 lg:px-6">I am a <span className="font-cursive">Cloud Engineer</span> and Data Engineer</h1>
        <p className="text-center font-lato text-gray-800 italic lg:text-xl">I love coding and learning new things.</p>
        <a href="#about" >
          <div className="flex items-center justify-center gap-2 text-sm font-mono px-2 py-1 rounded-full border border-black hover:border-2 hover:border-blue-500 hover:text-blue-500 lg:text-base lg:px-4 lg:py-2 lg:rounded-full">
            <button type="button" className="hover:italic">About Me </button> 
            <FaArrowRight />
          </div>
        </a>
      </div>
    </div>


    {/*----> About Section <>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>*/}

    <div id="about"className="space-y-6 lg:space-y-10 shadow-xl shadow-gray-500/25 px-4 py-6 md:px-6 md:py-7 lg:px-10 lg:py-14 rounded-2xl ">

      <h1 className="text-2xl md:text-3xl lg:text-4xl text-center font-bold font-playFair">About <span className="italic">Me</span></h1>

      <div className="flex flex-col lg:flex-row items-center justify-center lg:space-x-6 ">

        <div className="hidden lg:flex" >
          <img type="image/png" src="/src/assets/laptop.png" alt="profile" className="w-10/12 h-auto object-cover" />
        </div>

        <div className="text-base/[22px] md:text-base/7 lg:text-lg space-y-3 text-justify font-lato lg:space-y-6 text-gray-900">
          <p>I am Shubham Bhatia, a highly motivated and technically adept professional pursuing a Bachelor of Technology in 
            Information Technology from Inderprastha Engineering College (IPEC), with a graduation year of 2024. 
            My passion lies in data science, artificial intelligence, and software development, with strong 
            proficiency in Python, C++, SQL, and various machine learning libraries. I have hands-on experience 
            working with AWS services, including IAM, S3, EC2, Lambda, and Lex, for building scalable applications. 
          </p>

          <p>I am passionate about problem-solving, as reflected by my 6-star Gold Badge in SQL and 
            3-star Silver Badge in Problem-Solving on HackerRank. Throughout my academic career, 
            I have worked on various projects related to data visualization, machine learning, and chatbot development. 
            I am dedicated to leveraging my skills to build innovative solutions that enhance user experiences and optimize business processes.
          </p>

          <p>I have experience in developing and deploying applications on AWS, Azure, and GCP. 
            I have also worked on building data pipelines and data lakes using various technologies like Apache Spark, Apache Kafka, and Apache Nifi.
          </p>
        </div>

      </div>
    </div>


    {/*----> Projects Section <>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>*/}

    <div id="projects" className="space-y-5 py-6 md:py-7 lg:py-14">

      <h1 className="text-2xl md:text-3xl lg:text-4xl text-center font-bold font-playFair">Projects</h1>

      <div className="flex flex-col flex-wrap md:flex-row lg:flex-row lg:space-x-6 justify-around items-center">

        <div className="space-y-2 font-lato lg:space-y-4 text-gray-900 shadow-xl shadow-gray-500/25 px-4 py-6 md:px-6 md:py-7 lg:px-7 lg:py-10 rounded-2xl mt-6 w-80 h-[470px] lg:h-[520px]">
          <div className="h-36 w-full overflow-hidden flex justify-center items-center">
            <img type="image/jpg" src="/src/assets/project1.jpg" alt="Twitter Sentiment Analysis" />
          </div>
          <h1 className="text-lg font-semibold">Twitter Sentiment Analysis</h1>
          <ul className="flex flex-wrap items-center gap-2 text-xs">
            <li className="bg-sky-300 rounded-full px-2 py-1">Python</li>
            <li className="bg-sky-300 rounded-full px-2 py-1">NLTK</li>
            <li className="bg-sky-300 rounded-full px-2 py-1">ML</li>
            <li className="bg-sky-300 rounded-full px-2 py-1">Pandas</li>
            <li className="bg-sky-300 rounded-full px-2 py-1">NumPy</li>
            <li className="text-lg hover:text-xl"><a href="https://github.com/shubhambhatia2103/Twitter-Sentiment-Analysis" target="_blank"><FaGithub /></a></li>
          </ul>
          <p className="text-justify text-sm">Developed a Machine learning model to analyze the sentiment of tweets using the Natural Language Toolkit (NLTK) library in Python. 
            The model was trained on a dataset of 1.6 million tweets and achieved an accuracy of 85%.
          </p>
        </div>

        <div className="space-y-2 font-lato lg:space-y-4 text-gray-900 shadow-xl shadow-gray-500/25 px-4 py-6 md:px-6 md:py-7 lg:px-7 lg:py-10 rounded-2xl mt-6 w-80 h-[470px] lg:h-[520px]">
          <div  className="h-36 w-full overflow-hidden flex justify-center items-center">
          <img type="image/jpg" src="/src/assets/project2.jpg" alt="Netflix Catalog Trends Visualization" />
          </div>
          <h1 className="text-lg font-semibold">Netflix catalog Trends Visualization</h1>
          <ul className="flex flex-wrap items-center gap-2 text-xs">
            <li className="bg-sky-300 rounded-full px-2 py-1">AWS S3</li>
            <li className="bg-sky-300 rounded-full px-2 py-1">Amazon QuickSight</li>
            <li className="bg-sky-300 rounded-full px-2 py-1">Python</li>
            
            <li className="text-lg hover:text-xl"><a href="https://github.com/shubhambhatia2103/Visualize-data-with-AWS-QuickSight" target="_blank"><FaGithub /></a></li>
          </ul>
          <p className="text-justify text-sm">
            In this project, I explored Amazon QuickSight, a powerful business analytics service provided by AWS, to visualize and analyze Netflix&apos;s catalog trends.
             This hands-on experience allowed me to delve into data-driven decision-making by creating insightful visualizations.
          </p>
        </div>

        <div className="space-y-2 font-lato lg:space-y-4 text-gray-900 shadow-xl shadow-gray-500/25 px-4 py-6 md:px-6 md:py-7 lg:px-7 lg:py-10 rounded-2xl mt-6 w-80 h-[470px] lg:h-[520px]">
          <div className="h-36 w-full overflow-hidden flex justify-center items-center">
            <img type="image/jpg" src="/src/assets/project3.jpg" alt="Conversational Chatbot - Groq API Chat Assistant" />
          </div>
          <h1 className="text-lg font-semibold">Conversational Chatbot - Groq API Chat Assistant</h1>
          <ul className="flex flex-wrap items-center gap-2 text-xs">
            <li className="bg-sky-300 rounded-full px-2 py-1">Streamlit</li>
            <li className="bg-sky-300 rounded-full px-2 py-1">NLP</li>
            <li className="bg-sky-300 rounded-full px-2 py-1">Groq API</li>
            <li className="bg-sky-300 rounded-full px-2 py-1">LangChain</li>
            <li className="bg-sky-300 rounded-full px-2 py-1">LLM</li>
            <li className="text-lg hover:text-xl"><a href="https://github.com/shubhambhatia2103/Conversational-Chatbot-Groq" target="_blank"><FaGithub /></a></li>
          </ul>
          <p className="text-justify text-sm">
          This is a Streamlit-based app that allows users to interact with a conversational chatbot powered by the LangChain API. 
          The application uses the Groq API to generate responses and maintains a history of the conversation to provide context for the chatbot&apos;s responses.
          </p>
        </div>

        <div className="space-y-2 font-lato lg:space-y-4 text-gray-900 shadow-xl shadow-gray-500/25 px-4 py-6 md:px-6 md:py-7 lg:px-7 lg:py-10 rounded-2xl mt-6 w-80 h-[470px] lg:h-[520px]">
          <div className="h-36 w-full overflow-hidden flex justify-center items-center">
          <img type="image/jpg" src="/src/assets/project4.jpg" alt="AWS S3 Static Website Hosting" />
          </div>
          <h1 className="text-lg font-semibold">AWS S3 Static Website Hosting</h1>
          <ul className="flex flex-wrap items-center gap-2 text-xs">
            <li className="bg-sky-300 rounded-full px-2 py-1">AWS</li>
            <li className="bg-sky-300 rounded-full px-2 py-1">S3 bucket</li>
            <li className="bg-sky-300 rounded-full px-2 py-1">Access Control Lists(ACLs)</li>
            <li className="bg-sky-300 rounded-full px-2 py-1">Web Development</li>
            <li className="text-lg hover:text-xl"><a href="https://github.com/shubhambhatia2103/AWS-S3-Static-Website" target="_blank"><FaGithub /></a></li>
          </ul>
          <p className="text-justify text-sm">
          This project demonstrates how to host a static website using Amazon S3. 
          The website is a simple HTML page with associated assets, fully hosted on S3, 
          showcasing how to leverage AWS for static content delivery.
          </p>
        </div>
      </div>
    </div>
      
    
    {/*----> Contact Section <>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>*/}

    <div id="contact" className="space-y-6 lg:space-y-10 shadow-xl shadow-gray-500/25 px-4 py-6 md:px-6 md:py-7 lg:px-10 lg:py-14 rounded-2xl">
        <h1 className="text-2xl md:text-3xl lg:text-4xl text-center font-bold font-playFair">Contact <span className="italic">Me</span></h1>
        
        <form onSubmit={handleSubmit} className="space-y-4 font-lato">
          <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
            <div className="flex-1">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input type="text" id="name" name="name" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 px-3 py-1" />
            </div>
            <div className="flex-1">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" id="email" name="email" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 px-3 py-1" />
            </div>
          </div>
          
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
            <input type="text" id="subject" name="subject" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 px-3 py-1" />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
            <textarea id="message" name="message" rows="4" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 px-3 py-1"></textarea>
          </div>
          
          <div className="flex justify-end">
            <button type="submit" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              Send Message
            </button>
          </div>

          {formStatus && (
            <div className={`mt-4 text-center ${formStatus.includes('Oops') ? 'text-red-500' : 'text-green-500'}`}>
              {formStatus}
            </div>
          )}
        </form>
      </div>
    
    </>
  );
}

export default Body