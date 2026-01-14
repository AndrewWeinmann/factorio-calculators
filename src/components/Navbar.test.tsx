import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { ThemeProvider } from "../contexts";
import { Navbar } from "./Navbar";

function renderNavbar() {
  return render(
    <MemoryRouter>
      <ThemeProvider>
        <Navbar />
      </ThemeProvider>
    </MemoryRouter>,
  );
}

describe("Navbar", () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.classList.remove("dark");
  });

  afterEach(() => {
    localStorage.clear();
    document.documentElement.classList.remove("dark");
  });

  it("should render the logo link", () => {
    renderNavbar();

    const logoLink = screen.getByRole("link", { name: /factorio calculators/i });
    expect(logoLink).toBeInTheDocument();
    expect(logoLink).toHaveAttribute("href", "/");
  });

  it("should render navigation links", () => {
    renderNavbar();

    const solarLinks = screen.getAllByRole("link", { name: /solar calculator/i });
    const scienceLinks = screen.getAllByRole("link", { name: /science calculator/i });

    expect(solarLinks.length).toBeGreaterThan(0);
    expect(scienceLinks.length).toBeGreaterThan(0);
  });

  it("should render theme toggle", () => {
    renderNavbar();

    expect(screen.getByRole("button", { name: /toggle theme/i })).toBeInTheDocument();
  });

  it("should render mobile menu toggle button", () => {
    renderNavbar();

    const menuButton = screen.getByRole("button", { name: /toggle menu/i });
    expect(menuButton).toBeInTheDocument();
    expect(menuButton).toHaveAttribute("aria-expanded", "false");
  });

  it("should toggle mobile menu when button is clicked", async () => {
    const user = userEvent.setup();
    renderNavbar();

    const menuButton = screen.getByRole("button", { name: /toggle menu/i });

    expect(menuButton).toHaveAttribute("aria-expanded", "false");

    await user.click(menuButton);

    expect(menuButton).toHaveAttribute("aria-expanded", "true");
  });

  it("should close mobile menu when clicking a link", async () => {
    const user = userEvent.setup();
    renderNavbar();

    const menuButton = screen.getByRole("button", { name: /toggle menu/i });

    await user.click(menuButton);
    expect(menuButton).toHaveAttribute("aria-expanded", "true");

    const solarLinks = screen.getAllByRole("link", { name: /solar calculator/i });
    const mobileLink = solarLinks[solarLinks.length - 1];

    await user.click(mobileLink);

    expect(menuButton).toHaveAttribute("aria-expanded", "false");
  });

  it("should have correct href attributes on navigation links", () => {
    renderNavbar();

    const solarLinks = screen.getAllByRole("link", { name: /solar calculator/i });
    const scienceLinks = screen.getAllByRole("link", { name: /science calculator/i });

    solarLinks.forEach(link => {
      expect(link).toHaveAttribute("href", "/solar");
    });

    scienceLinks.forEach(link => {
      expect(link).toHaveAttribute("href", "/science");
    });
  });
});
