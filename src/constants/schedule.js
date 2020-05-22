import moment from "moment";

export default {
  startDate: moment("2020-10-24T10:00:00Z"),
  endDate: moment("2020-10-25T15:00:00Z"),
  saturday: [
    {
      time: "10:00",
      name: "Welcome!",
      details:
        "Intro, “The Reason Why We are All Here”, Overview of the challenges",
    },
    {
      time: "10:20",
      name: "LET THE HACKING BEGIN!",
      details: "Everyone gets started",
    },
    {
      time: "15:00",
      name: "Audience Feedback session",
      details: "Discuss your problems or get feedback",
    },
    {
      time: " 19:00",
      name: "Team progress report",
      details:
        "Quick standup, each team shares a quick summary of what they are doing",
    },
  ],
  sunday: [
    { time: "10:00", name: "Second day intro" },
    {
      time: "11:00",
      name: "Audience Feedback session",
      details: "Discuss your problems or get feedback",
    },
    { time: "13:45", name: "Hacking Ends" },
    { time: "14:00", name: "Presentations and Prizegiving" },
  ],
};
