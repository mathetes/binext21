import React from "react";

let passage = document.getElementById("passage");
console.log(passage);

class HighLightText extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      res: "Lorem ipsum dolor",
    };
    this.markMatches = this.markMatches.bind(this);
  }
  markMatches(ev) {
    let res = "Lorem ipsum dolor";
    const req = ev.target.value;
    if (req) {
      const normReq = req
        .toLowerCase()
        .replace(/\s+/g, " ")
        .trim()
        .split(" ")
        .sort((a, b) => b.length - a.length);
      res = res.replace(
        new RegExp(`(${normReq.join("|")})`, "gi"),
        (match) => "<mark>" + match + "</mark>"
      );
    }
    this.setState({
      res: res,
    });
  }

  render() {
    return (
      <div className="HighLightText">
        <input type="text" onChange={this.markMatches} />
        <br />
        <p dangerouslySetInnerHTML={{ __html: this.state.res }} />
      </div>
    );
  }
}

export default HighLightText;
