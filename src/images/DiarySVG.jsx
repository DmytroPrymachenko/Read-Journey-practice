const DiarySVG = ({ active, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <path
      stroke={active ? "#f9f9f9" : "#686868"}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 8 5.151 5.626c-.423-.353-.634-.53-.787-.745a2 2 0 0 1-.295-.632C4 3.994 4 3.72 4 3.168V1.333M8 8l2.849-2.374c.423-.353.634-.53.787-.745.134-.192.235-.406.295-.632C12 3.994 12 3.72 12 3.168V1.333M8 8l-2.849 2.373c-.423.353-.634.53-.787.746a2 2 0 0 0-.295.631C4 12.005 4 12.28 4 12.832v1.834M8 8l2.849 2.373c.423.353.634.53.787.746a2 2 0 0 1 .295.631c.069.255.069.53.069 1.082v1.834M2.667 1.333h10.667M2.667 14.666h10.667"
    />
  </svg>
);
export default DiarySVG;
