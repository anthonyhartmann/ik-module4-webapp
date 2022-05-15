import "@github/time-elements";
import { TimeAgoElement } from "@github/time-elements";
import React, { DOMAttributes } from "react";
import "./TimeSince.css";

type CustomElement<T> = Partial<T & DOMAttributes<T> & { children: any }>;

declare global {
  namespace JSX {
    interface IntrinsicElements {
      ["time-ago"]: CustomElement<TimeAgoElement>;
    }
  }
}

const formatRelativeTime = (value: number, unit: string): string => {
  if (value === 0) {
    switch (unit) {
      case "year":
      case "quarter":
      case "month":
      case "week":
        return `this ${unit}`;
      case "day":
        return "today";
      case "hour":
      case "minute":
        return `in 0 ${unit}s`;
      case "second":
        return "now";
    }
  } else if (value === 1) {
    switch (unit) {
      case "year":
      case "quarter":
      case "month":
      case "week":
        return `next ${unit}`;
      case "day":
        return "tomorrow";
      case "hour":
      case "minute":
      case "second":
        return `in 1 ${unit}`;
    }
  } else if (value === -1) {
    switch (unit) {
      case "year":
      case "quarter":
      case "month":
      case "week":
        return `last ${unit}`;
      case "day":
        return "yesterday";
      case "hour":
      case "minute":
      case "second":
        return `1 ${unit} ago`;
    }
  } else if (value > 1) {
    switch (unit) {
      default:
        return `in ${value} ${unit}s`;
    }
  } else if (value < -1) {
    switch (unit) {
      default:
        return `${-value} ${unit}s ago`;
    }
  }

  throw new RangeError(`Invalid unit argument for format() '${unit}'`);
};

const formatedMs = (ms: number) => {
  const sec = Math.round(ms / 1000);
  const min = Math.round(sec / 60);
  const hr = Math.round(min / 60);
  const day = Math.round(hr / 24);
  const month = Math.round(day / 30);
  const year = Math.round(month / 12);
  if (Math.abs(month) >= 12) {
    return formatRelativeTime(year, "year");
  } else if (Math.abs(day) >= 30) {
    return formatRelativeTime(month, "month");
  } else if (Math.abs(hr) >= 24) {
    return formatRelativeTime(day, "day");
  } else if (Math.abs(min) >= 45) {
    return formatRelativeTime(hr, "hour");
  } else if (Math.abs(sec) >= 45) {
    return formatRelativeTime(min, "minute");
  } else if (Math.abs(sec) >= 10) {
    return formatRelativeTime(sec, "second");
  } else {
    return formatRelativeTime(0, "second");
  }
};

type Props = {
  date: Date;
};

const TimeSince: React.FC<Props> = (props) => {
  /*
    This is where our time since component would go! But for now, it's just an empty div.
    This example will be done by the instructor, but feel free to try it out on your own.
  */
  return <div></div>
};

const TimeSinceWebComponent: React.FC<Props> = (props) => {
  /*
    Same as above, this would be a TimeSince component, but as an import.
    For now though, nothing here!
  */
  return <div></div>
};

export default TimeSince;
