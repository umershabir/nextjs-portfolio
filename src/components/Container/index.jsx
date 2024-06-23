const wrapper = {
  maxWidth: "50rem",
  display: "flex",
  flexDirection: "column",
  margin: "0 auto",
  padding: "2rem",
};
export default function Container({ children }) {
  return <div style={wrapper}>{children}</div>;
}
