import "./App.css";
import React from "react";
import ReactFlow, { Background, Controls } from "reactflow";
import "reactflow/dist/style.css";


const nodeDefaults = {
  style: {
    background: "transparent",
    color: "white",
    border: "1px solid white",
    padding: 10,
    fontSize: 14,
    borderRadius: 5,
  },
};

const nodes = [
  {
    id: "1",
    position: { x: 50, y: 20 },
    data: { label: "User" },
    style: nodeDefaults.style,
    draggable: false,
  },
  {
    id: "2",
    position: { x: 250, y: 50 },
    data: { label: "Website (Next.js)" },
    style: nodeDefaults.style,
    draggable: true,
  },
  {
    id: "3",
    position: { x: 500, y: 50 },
    data: { label: "AWS Cognito" },
    style: nodeDefaults.style,
    draggable: true,
  },
  // add the rest of your boxes here...
];


const edges = [
  { id: "e1-2", source: "1", target: "2", style: { stroke: "white" } },
  { id: "e2-3", source: "2", target: "3", style: { stroke: "white" } },
  // add edges exactly as per your diagram
];


const skillsSketch = () => {
  return (
    <div style={{ width: "100vw", height: "100vh", background: "black" }}>
      <ReactFlow nodes={nodes} edges={edges} fitView>
        <Background color="#333" gap={16} />
        <Controls style={{ color: "white" }} />
      </ReactFlow>
    </div>
  )
}


export default skillsSketch;
