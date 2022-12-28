import Question from "./Question";
import { useState } from "react";

export default function Faq() {
  const [questions, setQuestions] = useState([
    {
      question: "What is a cold email?",
      answer:
        "A cold email is an email sent to a potential client or customer who has not previously expressed interest in your product or service. It is a way to reach out to new people and introduce your business to them in the hopes of securing their business.",
    },
    {
      question: "Why use a cold email service?",
      answer:
        "Using a cold email service can help your business reach a wider audience and save time by automating the process of acquiring new leads. It can also help you get new clients at a fraction of a cost of running ads.",
    },
    {
      question: "Can I use your cold email service to get any type of clients?",
      answer:
        "Yes, our cold email service can be used by any type of SEO agency looking to reach new potential clients. We can help you get in touch with ecommerce owners, local businesses or any other type of client that you want to work with.",
    },
    {
      question: "Is this service for me?",
      answer:
        "If you run an SEO agency and want to reach new customers and get your calendar full with interested prospects, then our cold email services are for you.",
    },
  ]);
  return (
    <section className="pt-16 pb-16 overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="mb-14 font-heading font-semibold text-center text-4xl sm:text-4xl text-gray-900">
          Frequently asked questions
        </h2>
        <div className="max-w-2xl mx-auto bg-gradient-cyan p-0.5">
          <div className="flex flex-wrap">
            {questions.map((question) => (
              <Question question={question.question} answer={question.answer} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
