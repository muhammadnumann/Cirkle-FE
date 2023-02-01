// import SearchBar from 'material-ui-search-bar';
interface DButton {
  className?: string;
  text: string;
  setcheck: (check) => void;
  check?: boolean;
}
interface Search {
  className?: string;
  children?: React.ReactNode;
}
interface CustomDropdown {
  id?: string;
  text: string;
  className?: string;
  AddTask?: boolean;
}
export const DButton: React.FC<DButton> = ({ className, text, setcheck, check }) => {
  return (
    <>
      <button
        className={`custom-dropbtn dropdown-toggle cursor-pointer ${className}`}
        onClick={() => {
          setcheck(!check);
          // setIsMenuOpen((oldState) => !oldState);
        }}
        // ref={ref}
        id="fsdfsdfsd"
      >
        {text}
      </button>
    </>
  );
};
export const Search: React.FC<Search> = () => {
  return (
    <>
      {/* <SearchBar
        onChange={() => console.log('onChange')}
        onRequestSearch={() => console.log('onRequestSearch')}
        style={{
          margin: '0 auto',
          maxWidth: 800,
        }}
      /> */}
      <div className="input-group ">
        <input
          className="form-control border-end-0 border rounded-pill customSearch"
          type="text"
          placeholder="search"
          id="example-search-input"
        />
      </div>
    </>
  );
};
import React from 'react';

export const CustomDropdownA: React.FC<CustomDropdown> = ({ text }) => {
  const Accord = () => {
    const acc = document.getElementsByClassName('accordion');
    let i;
    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener('click', function () {
        console.log('clicked');
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle('active');
        this.classList.toggle('rotate-toggle');

        /* Toggle between hiding and showing the active panel */
        const panel = this.nextElementSibling;
        if (panel.style.display === 'block') {
          panel.style.display = 'none';
        } else {
          panel.style.display = 'block';
        }
      });
    }

    const options = document.getElementsByClassName('option');

    for (let o = 0; o < options.length; o++) {
      options[o].addEventListener('click', function () {
        this.parentElement.previousElementSibling.innerHTML = this.dataset.value;

        /* alert(e.target.dataset.value);  */
      });
    }
  };
  return (
    <>
      <div>
        <button
          className="accordion customAccordion accordian-toogle-icon pt-2 pb-2 font-12 font-weight-600 text-lightgray"
          onClick={() => {
            Accord();
          }}
        >
          {text}
        </button>
        <div className="panel p-2">
          {/* <option className="option font-10 font-weight-600" selected data-value="Humedad">
                Project Name
              </option> */}
          <div className="option font-10 font-weight-600" data-value="Task Name">
            {text}
          </div>
          <div className="option font-10 font-weight-600" data-value="Task Name">
            {text}
          </div>
          <div className="option font-10 font-weight-600" data-value="Task Name">
            {text}
          </div>
          <div className="option font-10 font-weight-600" data-value="Task Name">
            {text}
          </div>
          <button
            className={` border-r-100 py-2 px-4 w-100 border-blue me-5 ${'bg-white'}`}
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            <span className={' font-weight-600 font-12  text-blue'}>Add Task +</span>
          </button>
        </div>
      </div>
    </>
  );
};
