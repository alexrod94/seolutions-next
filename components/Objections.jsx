import Question from "./Question";
import BookACall from "./BookACall";
import { useState } from "react";

export default function Faq() {
  const [questions, setQuestions] = useState([
    {
      question: "I don't want to spam people with unsolicited emails",
      answer:
        "We understand that spamming people with unsolicited emails is not an effective or ethical way to get new clients. That's why our cold email service takes steps to avoid spamming people. We use alternative domains and email addresses to ensure that our emails don't get flagged as spam, and we only send emails to people who have expressed interest in receiving them. \n By targeting our emails to people who are actually interested in what we have to offer, we can increase the chances of them engaging with our emails and potentially doing business with us.",
    },
    {
      question:
        "Cold emailing cannot really be an effective way to get new clients",
      answer:
        "While it's true that cold emailing may not be an effective way to get new clients for everyone, it has proven to be an effective tactic for our clients in the past. We have a track record of getting great results for our clients using cold emailing, and we have developed a process that helps us craft compelling emails that get a high response rate. \nWe also provide ongoing support and guidance to help our clients optimize their emails and get the best results possible.",
    },
    {
      question:
        "I prefer to build relationships with potential clients through more personal means, like networking events or referrals",
      answer:
        "While networking events and referrals can be great ways to build relationships with potential clients, they can also be time-consuming and unpredictable. Cold emailing allows us to reach a larger number of potential clients in a shorter amount of time, and it gives us more control over who we target and how we communicate with them. \nBy using cold emailing in conjunction with other relationship-building tactics, we can maximize our chances of getting new clients.",
    },
    {
      question: "I'm not sure if cold emailing is even legal",
      answer:
        "Cold emailing is a legal marketing tactic as long as it is done in compliance with anti-spam laws. We take steps to ensure that our emails are in compliance with these laws, including providing an easy way for recipients to unsubscribe if they no longer wish to receive our emails.",
    },
    {
      question:
        "I'm worried about the potential for a high bounce rate or a low response rate to my emails",
      answer:
        "A high bounce rate or low response rate can be a concern when it comes to cold emailing, but we have strategies in place to minimize these risks. We use high-quality email lists and carefully segment our recipients to ensure that our emails are being sent to the right people. \nWe also use A/B testing to optimize our emails and increase the chances of them being opened and responded to.",
    },
    {
      question:
        "I'm not comfortable with the idea of paying for a service to send emails on my behalf",
      answer:
        "We understand that paying for a service to send emails on your behalf may not be for everyone. However, by outsourcing this task to us, you can save time and resources that can be better spent on other areas of your business. \nAdditionally, our team has extensive experience and expertise in crafting effective cold emails, which can ultimately result in a higher return on investment for you.",
    },
    {
      question:
        "I'm not sure how to write compelling cold emails that will actually convince people to do business with me",
      answer:
        "Crafting compelling cold emails that actually convince people to do business with you can be a challenge, but it's something that we have mastered through experience and testing. Our team is skilled at identifying the key points that will resonate with potential clients and crafting emails that effectively convey the value of our services. \nWe also provide ongoing support and guidance to help our clients optimize their emails and improve their results.",
    },
    {
      question:
        "I'm concerned about the potential for my emails to be flagged as spam",
      answer:
        "Being flagged as spam is a concern for any business using email marketing, but we take steps to minimize this risk. We use alternative domains and email addresses to ensure that our emails don't get flagged as spam, and we follow best practices for email deliverability. \nBy following these practices, we can increase the chances of our emails being delivered to the inboxes of our intended recipients.",
    },
    {
      question:
        "I'm not sure if cold emailing is in line with my company's branding and image",
      answer:
        "Cold emailing can be a powerful marketing tool, but it's important to consider how it aligns with your company's branding and image. \nOur team can work with you to craft emails that are consistent with your company's branding and messaging, so that you can use cold emailing as a way to reach new clients while still maintaining the image and reputation that you have worked so hard to build.",
    },
    {
      question:
        "I'm not convinced that cold emailing is the best use of my time and resources when it comes to marketing my agency",
      answer:
        "Cold emailing may not be the best use of time and resources for every business, but it can be a highly effective way to reach new clients if done correctly. By outsourcing this task to us, you can save time and focus on other areas of your business while still taking advantage of the benefits that cold emailing can offer. \nAnd with our track record of getting great results for our clients, you can feel confident that we will be able to help you get new clients through cold emailing.",
    },
  ]);
  return (
    <section className="pt-16 pb-16 overflow-hidden">
      <div className="container mx-auto px-4 w-5/6 mx-auto">
        <h2 className="mb-6 font-heading text-4xl md:text-5xl xl:text-7xl text-black font-bold text-center lg:leading-tight">
          You might be thinking, "cold email is just not for me"
        </h2>
        <div className="max-w-2xl mx-auto bg-white p-3 rounded">
          <div className="flex flex-wrap">
            {questions.map((question) => (
              <Question question={question.question} answer={question.answer} />
            ))}
          </div>
        </div>
        <BookACall />
      </div>
    </section>
  );
}
