import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { RxLapTimer } from "react-icons/rx";
import { FaAngleDown } from "react-icons/fa";

const Stat = () => {
  const [value, setValue] = useState("");

  const per = (e) => {
    setValue(value / 100);
  }

  return (
    <>
      <section>
        <div className="container">
          <div className="d-flex justify-content-center">
            <div className="calculater  ">
              <div className="upper-body">
                <div className="standard d-flex justify-content-between align-items-center">
                  <FaBars className="navicon" />
                  <span>Standard</span>
                  <RxLapTimer className="navicon" />
                </div>
                <div className="input-text">
                  <input
                    name="text"
                    type="text"
                    className="input"
                    readOnly
                    value={value}
                  />
                </div>
                <div className="d-flex justify-content-around">
                  <span>MC</span>
                  <span>MR</span>
                  <span>M+</span>
                  <span>M-</span>
                  <span>MS</span>
                  <span>
                    M<FaAngleDown />
                  </span>
                </div>
              </div>
              <div className="down-body">
                <div className="all-btn d-flex justify-content-evenly align-items-center">
                  <input
                    class="styled"
                    type="button"
                    value="C"
                    onClick={(e) => setValue("")}
                  />
                  <input
                    class="styled"
                    type="button"
                    value="%"
                    onClick={() => {per('%')}}
                  />
                  <input
                    class="styled"
                    type="button"
                    value="."
                    onClick={(e) => setValue(value + e.target.value)}
                  />
                  <input
                    class="styled"
                    type="button"
                    value="⌫"
                    onClick={(e) => setValue(value.slice(0, -1))}
                  />
                </div>
                <div className="all-btn d-flex justify-content-evenly align-items-center">
                  <input
                    class="styled"
                    type="button"
                    value="1"
                    onClick={(e) => setValue(value + e.target.value)}
                  />
                  <input
                    class="styled"
                    type="button"
                    value="2"
                    onClick={(e) => setValue(value + e.target.value)}
                  />
                  <input
                    class="styled"
                    type="button"
                    value="3"
                    onClick={(e) => setValue(value + e.target.value)}
                  />
                  <input
                    class="styled"
                    type="button"
                    value="/"
                    onClick={(e) => setValue(value + e.target.value)}
                  />
                </div>
                <div className="all-btn d-flex justify-content-evenly align-items-center">
                  <input
                    class="styled"
                    type="button"
                    value="4"
                    onClick={(e) => setValue(value + e.target.value)}
                  />
                  <input
                    class="styled"
                    type="button"
                    value="5"
                    onClick={(e) => setValue(value + e.target.value)}
                  />
                  <input
                    class="styled"
                    type="button"
                    value="6"
                    onClick={(e) => setValue(value + e.target.value)}
                  />
                  <input
                    class="styled"
                    type="button"
                    value="*"
                    onClick={(e) => setValue(value + e.target.value)}
                  />
                </div>
                <div className="all-btn d-flex justify-content-evenly align-items-center">
                  <input
                    class="styled"
                    type="button"
                    value="7"
                    onClick={(e) => setValue(value + e.target.value)}
                  />
                  <input
                    class="styled"
                    type="button"
                    value="8"
                    onClick={(e) => setValue(value + e.target.value)}
                  />
                  <input
                    class="styled"
                    type="button"
                    value="9"
                    onClick={(e) => setValue(value + e.target.value)}
                  />
                  <input
                    class="styled"
                    type="button"
                    value="-"
                    onClick={(e) => setValue(value + e.target.value)}
                  />
                </div>
                <div className="all-btn d-flex justify-content-evenly align-items-center">
                  <input
                    class="styled"
                    type="button"
                    value="00"
                    onClick={(e) => setValue(value + e.target.value)}
                  />
                  <input
                    class="styled"
                    type="button"
                    value="0"
                    onClick={(e) => setValue(value + e.target.value)}
                  />
                  <input
                    class="styled equal"
                    type="button"
                    value="="
                    onClick={(e) => setValue(eval(value))}
                  />
                  <input
                    class="styled"
                    type="button"
                    value="+"
                    onClick={(e) => setValue(value + e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Stat;