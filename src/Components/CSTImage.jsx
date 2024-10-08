import React, { useEffect } from "react";

const CSTImage = () => {
  useEffect(() => {
    // Function to convert span to text and apply styles
    const convertSpanToText = () => {
      // Select all span elements
      const spans = document.querySelectorAll("span");

      spans.forEach((span) => {
        // Create a new text element
        const text = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "text"
        );

        // Set the inner text of the text element
        text.textContent = span.textContent;

        // Get the computed styles of the span
        const computedStyle = getComputedStyle(span);

        // Apply styles to the text element
        text.setAttribute("fill", computedStyle.color);
        text.setAttribute("font-size", computedStyle.fontSize);
        text.setAttribute("font-weight", computedStyle.fontWeight);
        text.setAttribute("letter-spacing", computedStyle.letterSpacing);

        // Handle transformation if it exists
        const transform = computedStyle.transform;
        if (transform !== "none") {
          text.setAttribute("transform", transform);
        }

        // Get x and y positions from top and left properties
        const top = parseFloat(computedStyle.top);
        const left = parseFloat(computedStyle.left);

        // Set the x and y attributes for the text element
        text.setAttribute("x", left);
        text.setAttribute("y", top + parseFloat(computedStyle.fontSize)); // Adjust y position to align with text baseline

        // Replace the span with the text element
        document.querySelector(".div").appendChild(text);
      });
    };

    // Call the function
    convertSpanToText();
    setTimeout(() => {
      let element = document.querySelector(".div");
      console.log(element);
      localStorage.setItem("ele", element.outerHTML);
      console.log("Element stored in localStorage:", element.outerHTML);
    }, 3000);
  }, []);
  return (
    <div className="cst">
      <div className="div">{/* The text elements will be inserted here */}</div>
      <span className="language l1">Python</span>
      <span className="language l2">Java</span>
      <span className="language l3">C++</span>
      <span className="language l4">JavaScript</span>
      <span className="language l5">C</span>
      <span className="language l6">Swift</span>
      <span className="language l7">Go</span>
      <span className="language l8">PHP</span>
      <span className="language l9">C#</span>
      <span className="language l10">R</span>
      <span className="language l11">F#</span>
      <span className="language l12">Dart</span>
      <span className="language l13">Kotlin</span>
      <span className="language l14">Ruby</span>
      <span className="language l15">Lua</span>
      <span className="language l16">Haskell</span>
      <span className="language l17">TypeScript</span>
      <span className="language l18">Scala</span>
      <span className="language l19">Lua</span>
      <span className="language l20">F#</span>
      <span className="language l21">Rust</span>
      <span className="language l23">Bash</span>
      <span className="language l24">Perl</span>
      <span className="language l25">Matlab</span>
      <span className="language l26">PowerShell</span>
      <span className="language l27">Python</span>
      <span className="language l28">Haskell</span>
      <span className="language l29">Markdown</span>
      <span className="language l30">HTML</span>
      <span className="language l31">SQL</span>
      <span className="language l32">Fortran</span>
      <span className="language l33">Lua</span>
      <span className="language l34">Scratch</span>
      <span className="language l35">Python</span>
      <span className="language l36">C++</span>
      <span className="language l37">JavaScript</span>
      <span className="language l38">C</span>
      <span className="language l39">Swift</span>
      <span className="language l40">Go</span>
      <span className="language l41">PHP</span>
      <span className="language l42">C#</span>
      <span className="language l43">R</span>
      <span className="language l44">F#</span>
      <span className="language l45">Dart</span>
      <span className="language l46">Kotlin</span>
      <span className="language l47">Ruby</span>
      <span className="language l48">Lua</span>
      <span className="language l49">Haskell</span>
      <span className="language l50">TypeScript</span>
      <span className="language l51">Scala</span>
      <span className="language l52">C</span>
      <span className="language l53">R</span>
      <span className="language l54">Rust</span>
      <span className="language l55">Go</span>
      <span className="language l56">Bash</span>
      <span className="language l57">Perl</span>
      <span className="language l58">Lua</span>
      <span className="language l59">PowerShell</span>
      <span className="language l60">MATLAB</span>
      <span className="language l61">Haskell</span>
      <span className="language l62">Markdown</span>
      <span className="language l63">HTML</span>
      <span className="language l64">SQL</span>
      <span className="language l65">Fortran</span>
      <span className="language l66">Lua</span>
      <span className="language l67">Scratch</span>
      <span className="language l68">Scheme</span>
      <span className="language l69">Crystal</span>
      <span className="language l70">Nim</span>
      <span className="language l71">Zig</span>
      <span className="language l72">COBOL</span>
      <span className="language l73">C++</span>
      <span className="language l74">JavaScript</span>
      <span className="language l75">C</span>
      <span className="language l76">Swift</span>
      <span className="language l77">Go</span>
      <span className="language l78">PHP</span>
      <span className="language l79">C#</span>
      <span className="language l80">R</span>
      <span className="language l81">F#</span>
      <span className="language l82">Dart</span>
      <span className="language l83">Kotlin</span>
      <span className="language l84">Ruby</span>
      <span className="language l85">Lua</span>
      <span className="language l86">Haskell</span>
      <span className="language l87">TypeScript</span>
      <span className="language l88">Scala</span>
      <span className="language l89">C</span>
      <span className="language l90">R</span>
      <span className="language l91">Rust</span>
      <span className="language l92">Go</span>
      <span className="language l93">Bash</span>
      <span className="language l94">Perl</span>
      <span className="language l95">Lua</span>
      <span className="language l96">PowerShell</span>
      <span className="language l97">MATLAB</span>
      <span className="language l98">Haskell</span>
      <span className="language l99">Markdown</span>
      <span className="language l101">HTML</span>
      <span className="language l102">SQL</span>
      <span className="language l103">Fortran</span>
      <span className="language l104">Lua</span>
      <span className="language l105">Scratch</span>
      <span className="language l106">Scheme</span>
      <span className="language l107">Crystal</span>
      <span className="language l108">Nim</span>
      <span className="language l109">Zig</span>
      <span className="language l110">COBOL</span>
      <span className="language l111">Java</span>
      <span className="language l112">NIM</span>
      <span className="language l113">ZIG</span>
    </div>
  );
};

export default CSTImage;
