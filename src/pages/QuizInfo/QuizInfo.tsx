type QuizInfoProps = {
  level: string;
  title: string;
  description: string;
  rules: string[];
};

function QuizInfo({ level, title, description, rules }: QuizInfoProps) {
  console.log({ level, title, description, rules });
  return <h1>Hello, I'm QuizInfo</h1>;
}

export { QuizInfo };
