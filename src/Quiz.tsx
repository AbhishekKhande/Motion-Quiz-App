import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
const QuestionsArray = [
  {
    questionDescription:
      "When building a React frontend that integrates with a Node.js backend using OAuth 2.0 via Keycloak, which approach best ensures secure token handling while maintaining compatibility with React Query's state management?",
    name: "Question 1",
  },
  {
    questionDescription:
      "How can you effectively manage access tokens in a React application while avoiding unnecessary re-authentication with a Keycloak server?",
    name: "Question 2",
  },
  {
    questionDescription:
      "What are the advantages of using Server-Sent Events (SSE) over WebSockets for real-time data streaming in a Node.js backend connected to a React frontend?",
    name: "Question 3",
  },
  {
    questionDescription:
      "In a Vite-powered React project, how can you optimize the development experience while ensuring compatibility with Redux Toolkit for state management?",
    name: "Question 4",
  },
  {
    questionDescription:
      "How can React Query's caching mechanism be leveraged to reduce redundant API calls in a Remix-based application?",
    name: "Question 5",
  },
  {
    questionDescription:
      "What strategies can be employed to securely store OAuth tokens in a React Native app when using Keycloak as an identity provider?",
    name: "Question 6",
  },
  {
    questionDescription:
      "How do you integrate WebSockets for bidirectional communication in a React application using the react-use-websocket library?",
    name: "Question 7",
  },
  {
    questionDescription:
      "What are the best practices for implementing a Node.js API that streams real-time updates to a React frontend using Server-Sent Events (SSE)?",
    name: "Question 8",
  },
  {
    questionDescription:
      "How can Redux Toolkit be used to manage authentication state efficiently when converting a React Context-based AuthProvider?",
    name: "Question 9",
  },
  {
    questionDescription:
      "What steps should be followed to securely connect a React Native app to a Keycloak server using a Kratos session token for authentication?",
    name: "Question 10",
  },
];
function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState({
    questionNumber: QuestionsArray[0].name,
    questionDescription: QuestionsArray[0].questionDescription,
    currentQuestion: 0,
    Direction: 0,
  });

  const variants = {
    enter: (direction: number) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0,
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0,
      };
    },
  };

  const paginateQuestion = (index: number) => {
    if (index > 0) {
      if (currentQuestion.currentQuestion + 1 > QuestionsArray.length - 1) {
        setCurrentQuestion(() => ({
          questionNumber: QuestionsArray[0].name,
          questionDescription: QuestionsArray[0].questionDescription,
          currentQuestion: 0,
          Direction: -1,
        }));
      } else {
        setCurrentQuestion((prev) => ({
          questionNumber: QuestionsArray[prev.currentQuestion + 1].name,
          questionDescription:
            QuestionsArray[prev.currentQuestion + 1].questionDescription,
          currentQuestion: prev.currentQuestion + 1,
          Direction: 1,
        }));
      }
    }
    if (index < 0) {
      if (currentQuestion.currentQuestion - 1 < 0) {
        setCurrentQuestion({
          questionNumber: QuestionsArray[QuestionsArray.length - 1].name,
          questionDescription:
            QuestionsArray[QuestionsArray.length - 1].questionDescription,
          currentQuestion: QuestionsArray.length - 1,
          Direction: 1,
        });
      } else {
        setCurrentQuestion((prev) => ({
          questionNumber: QuestionsArray[prev.currentQuestion - 1].name,
          questionDescription:
            QuestionsArray[prev.currentQuestion - 1].questionDescription,
          currentQuestion: prev.currentQuestion - 1,
          Direction: -1,
        }));
      }
    }
  };

  return (
    <div className="quiz-container w-screen h-screen flex flex-col justify-start items-center gap-8 bg-neutral-50">
      <div className="quiz-header w-[90%] h-24 border-t-0 border px-5 rounded-b-2xl bg-white flex flex-row justify-between items-center shadow-lg shadow-neutral-200">
        <div
          className={`flex gap-4 items-center px-2 py-2.5 text-xl opacity-100 transition-all duration-300 font-bold text-black `}
        >
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/46d10ce768ecdcc2ecdd1394cae4ab4a039cb35dab328a36a9a9cdb665ca5cbf?placeholderIfAbsent=true&apiKey=474225854623423c84a4518930a9a599"
            alt=""
            className={`object-contain shrink-0 transition-all duration-300 my-auto w-14 aspect-square`}
          />
          <div className="px-1 my-auto">
            YOUR <br />
            COMPANY
          </div>
        </div>
        <div className="text-2xl uppercase font-semibold text-gray-500 tracking-widest">
          Quiz Title
        </div>
        <div className="flex gap-2.5 justify-center items-center self-stretch my-auto">
          <div className="flex overflow-hidden justify-between items-center self-stretch my-auto border border-black border-solid rounded-[10000px] ">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/6e1959e4f8ec6fc0fbc2928ddf903bda415afb23800fed0e898dbd8ae8a0e0d9?placeholderIfAbsent=true&apiKey=474225854623423c84a4518930a9a599"
              alt={`Abhishek's profile`}
              className="object-contain self-stretch my-auto aspect-square w-[61px]"
            />
          </div>
        </div>
      </div>
      <div className="quiz-content-container w-[90%] h-[calc(100vh-150px)] flex flex-row justify-center border bg-white p-3 rounded-2xl shadow-xl">
        <div className="question-outlet w-4/5 h-full border overflow-hidden rounded-l-lg">
          <AnimatePresence
            mode="popLayout"
            initial={false}
            custom={currentQuestion.Direction}
          >
            <motion.div
              key={currentQuestion.questionNumber}
              custom={currentQuestion.Direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              className="question h-4/5 overflow-y-scroll w-full p-5"
            >
              <p className="w-full my-3">{currentQuestion.questionNumber}</p>
              <p className="py-4 text-xl font-medium">
                {currentQuestion.questionDescription}
              </p>
              <div className="question-options">
                <div className="grid grid-cols-2 gap-2 grid-rows-2 my-4">
                  <div className="option-container flex flex-row divide-x rounded-lg hover:scale-[1.005] transition hover:shadow-md border">
                    <div className="my-3 py-2 px-4">A</div>
                    <p className="text-end my-2 py-2 px-4 w-full">option A</p>
                  </div>
                  <div className="option-container flex flex-row divide-x rounded-lg hover:scale-[1.005] transition hover:shadow-md border">
                    <div className="my-3 py-2 px-4">B</div>
                    <p className="text-end my-2 py-2 px-4 w-full">option B</p>
                  </div>
                  <div className="option-container flex flex-row divide-x rounded-lg hover:scale-[1.005] transition hover:shadow-md border">
                    <div className="my-3 py-2 px-4">C</div>
                    <p className="text-end my-2 py-2 px-4 w-full">option C</p>
                  </div>
                  <div className="option-container flex flex-row divide-x rounded-lg hover:scale-[1.005] transition hover:shadow-md border">
                    <div className="my-3 py-2 px-4">D</div>
                    <p className="text-end my-2 py-2 px-4 w-full">option D</p>
                  </div>
                </div>
                <button className="py-3 px-5 border rounded-lg hover:shadow-xl float-end transition">
                  Submit
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
          <div
            className="next-prev-container h-1/5 flex flex-row justify-between mx-5 items-center border-t
             my-2"
          >
            <motion.button
              whileTap={{
                scale: 0.9,
              }}
              transition={{
                duration: 0.1,
              }}
              onTap={() => paginateQuestion(-1)}
              className="prev p-2 flex flex-row group hover:shadow-lg transition min-w-20 rounded-lg border hover:bg-neutral-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24px"
                height="24px"
                viewBox="0 0 16 16"
                className="group-hover:text-slate-300 rotate-180 transition"
              >
                <path
                  fill="currentColor"
                  d="m9.77 12.11l4.012-2.953a.647.647 0 0 0 0-1.114L9.771 5.09a.644.644 0 0 0-.971.557V6.65H2v3.9h6.8v1.003c0 .505.545.808.97.557"
                ></path>
              </svg>
              <span className="mx-2">Previous</span>
            </motion.button>
            <motion.button
              whileTap={{
                scale: 0.9,
              }}
              transition={{
                duration: 0.1,
              }}
              onTap={() => paginateQuestion(1)}
              className="prev flex flex-row group hover:shadow-lg transition p-2 min-w-20 rounded-lg border hover:bg-neutral-100"
            >
              <span className="mx-2">Next</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24px"
                height="24px"
                viewBox="0 0 16 16"
                className="group-hover:text-slate-300 transition"
              >
                <path
                  fill="currentColor"
                  d="m9.77 12.11l4.012-2.953a.647.647 0 0 0 0-1.114L9.771 5.09a.644.644 0 0 0-.971.557V6.65H2v3.9h6.8v1.003c0 .505.545.808.97.557"
                />
              </svg>
            </motion.button>
          </div>
        </div>
        <div className="question-sidebar overflow-y-scroll w-1/5 h-full bg-neutral-200 border rounded-r-lg flex flex-col gap-2 py-3">
          {Array.from(QuestionsArray).map((key, index) => {
            return (
              <div
                key={key.name}
                className={`mx-2 relative p-2 rounded-lg transition-[background-color] duration-700 hover:cursor-pointer hover:scale-[1.01] ${currentQuestion.questionNumber === key.name ? "bg-neutral-300" : "bg-white"}`}
                onClick={() => {
                  setCurrentQuestion((prev) => {
                    if (prev.currentQuestion - index > 0) {
                      return {
                        questionNumber: `${key.name}`,
                        questionDescription: `${key.questionDescription}`,
                        currentQuestion: index,
                        Direction: -1,
                      };
                    } else {
                      return {
                        questionNumber: `${key.name}`,
                        questionDescription: `${key.questionDescription}`,
                        currentQuestion: index,
                        Direction: 1,
                      };
                    }
                  });
                }}
              >
                {key.name}
                {currentQuestion.questionNumber === key.name ? (
                  <motion.div
                    className="p-2 absolute top-0 left-0 bottom-0 rounded-lg border border-neutral-400 shadow-xl w-full"
                    layoutId="underline"
                  />
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Quiz;
