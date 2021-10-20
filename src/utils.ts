export const showOutput = <T extends (...args: any) => any>(fn: T, ...args: Parameters<T>) => {
  const root = document.getElementById("app");

  if (root) {
    root.innerHTML = `
      <p>
        <b>Function</b>: <i>${fn.name}</i>
      </p>
      <p>
        <b>Arguments</b>: <pre>${JSON.stringify(args, null, 2)}</pre>
      </p>
      <p>
        <b>Result</b>:<pre>${JSON.stringify(fn(...args), null, 2)}</pre>
      </p>
    `;
  }
};
