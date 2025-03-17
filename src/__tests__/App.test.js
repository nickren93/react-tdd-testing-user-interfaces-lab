import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

import App from "../App";

// Your tests here
test("displays a top-level heading with the text `Hi, I'm _______`", () => {
    // Arrange
    render(<App />)

    // Act
    const topLevelHeading = screen.getByRole("heading", {
        name: /hi, i'm/i,
        exact: false,
        level: 1,
    });
    
    // Assert
    expect(topLevelHeading).toBeInTheDocument(); 
});

test("displays an image of yourself with alt text identifying the content of the image", () => {
    // Arrange
    render(<App />);
    // Act
    const img = screen.getByRole("img", { name: 'my picture'})
    // Assert
    expect(img).toBeInTheDocument();
});

test("displays A second-level heading with the text `About Me`", () => {
    // Arrange
    render(<App />);
    // Act
    const secondLevelHeading = screen.getByRole("heading", {
        name: /About Me/i,
        exact: false,
        level: 2,
    });
    // Assert
    expect(secondLevelHeading).toBeInTheDocument();
});

test("displays a paragraph for your biography", () => {
    // Arrange
    render(<App />);
    // Act
    const bio = screen.getByText(/I am a software engineer/i);
    // Assert
    expect(bio).toBeInTheDocument();
});

test("displays a link to your GitHub page", () => {
    // Arrange
    render(<App />);
    // Act
    const gitHubLink = screen.getByRole("link", {
        name: /GitHub/i
    });
    // Assert
    expect(gitHubLink).toBeInTheDocument();
});

test("displays a link to your LinkedIn page", () => {
    // Arrange
    render(<App />);
    // Act
    const linkedInLink = screen.getByRole("link", {
        name: /LinkedIn/i
    });
    // Assert
    expect(linkedInLink).toBeInTheDocument();
});