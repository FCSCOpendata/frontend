const ErrorMessage: React.FC<{ message: any; error?: any }> = ({
  message,
  error,
}) => {
  if (error) console.error(error);

  return (
    <aside>
      {message}
      <style jsx>{`
        aside {
          padding: 1.5em;
          font-size: 14px;
          color: white;
          background-color: red;
        }
      `}</style>
    </aside>
  );
};

export default ErrorMessage;
