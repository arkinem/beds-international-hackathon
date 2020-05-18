// import React from "react";
// import styled from "styled-components";
// import { useSpring, animated } from "react-spring";
// import { Spring } from "react-spring/renderprops";

// class ScenarioBubble extends React.Component {
//   state = {
//     content: false,
//   };

//   displayContent = (e) => {
//     e.preventDefault();
//     this.setState({ content: !this.state.content });
//   };

//   render() {
//     return (
//       <Bubble>

//       </Bubble>
//       <div className="container">
//         // The button that toggles the animation
//         <div className="button-container">
//           <button onClick={this.displayContent} className="button">
//             Toggle Content
//           </button>
//         </div>
//         {!this.state.content ? (
//           // Content in the main container
//           <div>No Content</div>
//         ) : (
//           // We call Spring and define the from and to props
//             <Spring
//               force
//             from={{
//               // Start invisible and offscreen
//               opacity: 0,
//               marginTop: -1000,
//             }}
//             to={{
//               // End fully visible and in the middle of the screen
//               opacity: 1,
//               marginTop: 0,
//             }}
//           >
//             {(props) => (
//               // The actual box that slides down
//               <div className="box" style={props}>
//                 <h1>This content slid down. Thanks to React Spring</h1>
//               </div>
//             )}
//           </Spring>
//         )}
//       </div>
//     );
//   }
// }
// export default ScenarioBubble;

// const Bubble = styled.div`
//   background: deeppink;
//   width: 200px;
//   height: 200px;
//   border-radius: 50%;
// `;

import React from "react";
import styled from "styled-components";
import { Spring, animated, interpolate } from "react-spring/renderprops";

const TRIANGLE = "M20,380 L380,380 L380,380 L200,20 L20,380 Z";
const RECTANGLE = "M20,20 L20,380 L380,380 L380,20 L20,20 Z";
const styles = {
  container: {
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    willChange: "background",
  },
};

export default class ScenarioBubble extends React.Component {
  state = {
    expanded: false,
  };

  expand = () => this.setState(({ expanded }) => ({ expanded: !expanded }));

  render() {
    const { expanded } = this.state;
    console.log("expanded", expanded);
    return (
      <Spring
        native
        from={{ fill: "black" }}
        to={{
          backgroundColor: expanded ? "#A29B7F" : "#F3FFBD",
          width: expanded ? "100%" : "150px",
          height: expanded ? "100%" : "150px",
          borderRadius: expanded ? "5%" : "100%",
          top: expanded ? 0 : 50,
          bottom: expanded ? 0 : 50,
          left: expanded ? 0 : 50,
          right: expanded ? 0 : 50,
          position: expanded ? "absolute" : "relative",
          // scale: toggle ? 0.3 : 0.7,
        }}
        toggle={this.expand}
        onRest={() => console.log("done")}
      >
        {(style) => (
          <animated.div onClick={this.expand} style={style}>
            hehe
          </animated.div>
          // <animated.div style={{ ...styles.container, backgroundColor }}>
          // <Shape
          //   style={{
          //     fill,
          //     transform: interpolate(
          //       [rotate, scale],
          //       (r, s) => `rotate3d(0,1,0,${r}) scale(${s})`
          //     ),
          //   }}
          //   version="1.1"
          //   viewBox="0 0 400 400"
          // >
          //   <g
          //     style={{ cursor: "pointer" }}
          //     fillRule="evenodd"
          //     onClick={this.toggle}
          //   >
          //     <animated.path id="path-1" d={shape} />
          //   </g>
          // </Shape>
          // </animated.div>
        )}
      </Spring>
    );
  }
}

const Bubble = styled(animated.div)``;
