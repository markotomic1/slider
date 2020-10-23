import React, {
  useState,
  useEffect,
} from "react";
import data from "./data";
import {
  FiChevronRight,
  FiChevronLeft,
} from "react-icons/fi";

function App() {
  const [value, setValue] = useState(0);
  const [people, setPeople] = useState(data);

  useEffect(() => {
    if (value < 0) {
      setValue(people.length - 1);
    } else if (value > people.length - 1) {
      setValue(0);
    }
  }, [people, value]);
  useEffect(() => {
    let slider = setInterval(() => {
      setValue(value + 1);
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [value]);

  return (
    <main>
      <section className='slider-section'>
        <div className='title'>
          <h2>Slider</h2>
          <div className='underline'></div>
        </div>

        {people.map((item, index) => {
          if (index === value) {
            return (
              <div className='card'>
                <img
                  src={item.image}
                  alt={item.name}
                  className='img'
                />

                <div className='heading'>
                  <button
                    onClick={() =>
                      setValue(value - 1)
                    }
                    className='minus'
                  >
                    <FiChevronLeft />
                  </button>
                  <div className='heading-text'>
                    <h2>{item.name}</h2>
                    <p>{item.title}</p>
                  </div>
                  <button
                    onClick={() =>
                      setValue(value + 1)
                    }
                    className='plus'
                  >
                    <FiChevronRight />
                  </button>
                </div>
                <p className='para'>
                  {item.quote}
                </p>
              </div>
            );
          }
        })}
      </section>
    </main>
  );
}

export default App;
