import { render, screen } from "@testing-library/react";
import SummaryForm from "../SummaryForm";
import userEvent from "@testing-library/user-event";

test("Inital Condition", async () => {
  render(<SummaryForm />);
  const button = screen.getByRole("button", { name: /submit order/i });
  const checkbox = screen.getByRole("checkbox", {
    label: /terms and conditions/i,
  });
  expect(checkbox).not.toBeChecked();
  expect(button).toBeDisabled();
});

test("button should be enabled and disabled on checking and unchecking the checkbox", async () => {
  render(<SummaryForm />);
  const button = screen.getByRole("button", { name: /submit order/i });
  const checkbox = screen.getByRole("checkbox", {
    label: /terms and conditions/i,
  });
  const user = userEvent.setup();

  await user.click(checkbox);
  expect(button).toBeEnabled();

  await user.click(checkbox);
  expect(button).toBeDisabled();
});

test("popover should be hidden by default and shoud be actiove on hover checkbox label", async () => {
  render(<SummaryForm />);
  const button = screen.getByRole("button", { name: /submit order/i });
  const checkbox = screen.getByRole("checkbox", {
    label: /terms and conditions/i,
  });

  const user = userEvent.setup();

  const nullpopover = screen.queryByText(/keek/i);
  expect(nullpopover).not.toBeInTheDocument();

  const label = screen.getByText(/terms and conditions/i);
  expect(label).toBeInTheDocument();

  await user.hover(label);
  const popover = screen.getByText(/keek/i);
  expect(popover).toBeInTheDocument();

  await user.unhover(label);
  expect(popover).not.toBeInTheDocument();
});
