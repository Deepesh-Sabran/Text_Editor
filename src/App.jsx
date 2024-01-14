import React, { useCallback, useState } from "react";
import Navbar from "./components/Navbar";
import CodeMirror from "@uiw/react-codemirror";

import { htmlLanguage, htmlPlain } from "@codemirror/lang-html";
import { cssLanguage } from "@codemirror/lang-css";
import { javascript } from "@codemirror/lang-javascript";
import Result from "./components/Result";

const App = () => {
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");

  // html onchange handler
  const onChangeHtml = useCallback((value) => {
    // console.log(value);
    setHtml(value);
  }, []);

  // html onchange handler
  const onChangeCss = useCallback((value) => {
    // console.log(value);
    setCss(value);
  }, []);

  // html onchange handler
  const onChangeJavaScript = useCallback((value) => {
    // console.log(value);
    setJs(value);
  }, []);

  // combining all the useStates to build a complete source code
  const srcCode = `
    <body>${html}</body>
    <style>${css}</style>
    <script>${js}</script>
  `;

  return (
    <>
      <Navbar />

      {/* main content  */}
      <div className=" p-2">
        {/* Editor  */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
          {/* Html Editor */}
          <div className="bg-[#282c34] p-4 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-2 text-white">
              <span className="font-extralight">HTML</span>
              <CodeMirror
                className="text-xl border-gray-700 border"
                value={html}
                height="342px"
                theme="dark"
                extensions={[htmlLanguage, htmlPlain]}
                onChange={onChangeHtml}
              />
            </h2>
          </div>
          {/* Css Editor  */}
          <div className="bg-[#282c34] p-4 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-2 text-white">
              <span className="font-extralight">CSS</span>
              <CodeMirror
                className="text-xl border-gray-700 border"
                value={css}
                height="342px"
                theme="dark"
                extensions={[cssLanguage]}
                onChange={onChangeCss}
              />
            </h2>
          </div>
          {/* JavaScript Editor  */}
          <div className="bg-[#282c34] p-4 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-2 text-white">
              <span className="font-extralight">JavaScript</span>
              <CodeMirror
                className="text-xl border-gray-700 border"
                value={js}
                height="342px"
                theme="dark"
                extensions={[javascript(true)]}
                onChange={onChangeJavaScript}
              />
            </h2>
          </div>
        </div>

        {/* Result */}
        <Result
          //need to pass srcCode as props
          srcCode={srcCode}
        />
      </div>
    </>
  );
};

export default App;
