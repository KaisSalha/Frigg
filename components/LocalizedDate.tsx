import useLocalizedDate from "hooks/useLocalizedDate";

const LocalizedDate = ({ date }: { date: Date }) => {
  return (
    <time pubdate="pubdate" dateTime={date.toString()}>
      {useLocalizedDate(date, false)}
    </time>
  );
};

export default LocalizedDate;
