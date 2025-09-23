"use client";
import styled from 'styled-components';

const NormalButton = ({ label = "Explore All Projects" }) => {
  return (
    <StyledWrapper>
      <button className="button1">
        <span className="button1__icon-wrapper">
          <svg
            viewBox="0 0 14 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="button1__icon-svg"
            width={10}
          >
            <path
              d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
              fill="currentColor"
            />
          </svg>
          <svg
            viewBox="0 0 14 15"
            fill="none"
            width={10}
            xmlns="http://www.w3.org/2000/svg"
            className="button1__icon-svg button1__icon-svg--copy"
          >
            <path
              d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
              fill="currentColor"
            />
          </svg>
        </span>
        {label}
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .button1 {
    line-height: 1;
    display: inline-flex;
    align-items: center;
    gap: 0.75rem;
    background-color: #fff;
    color: #000;
    border-radius: 10rem;
    font-weight: 600;
    padding: 0.75rem 1.5rem;
    padding-left: 20px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;
  }

  .button1__icon-wrapper {
    flex-shrink: 0;
    width: 25px;
    height: 25px;
    position: relative;
    color: #fff;
    background-color: #000;
    border-radius: 50%;
    display: grid;
    place-items: center;
    overflow: hidden;
  }

  .button1__icon-svg,
  .button1__icon-svg--copy {
    transition: transform 0.3s ease-in-out;
  }

  .button1__icon-svg--copy {
    position: absolute;
    transform: translate(-150%, 150%);
  }

  .button1:hover {
    background-color: #02B7DB;
    color: #0A0A0A;
  }

  .button1:hover .button1__icon-wrapper {
    color: #fff;
    background-color: #000;
  }

  .button1:hover .button1__icon-svg:first-child {
    transform: translate(150%, -150%);
  }

  .button1:hover .button1__icon-svg--copy {
    transform: translate(0);
  }
`;

export default NormalButton;
