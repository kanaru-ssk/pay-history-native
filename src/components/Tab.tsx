import TabItem from "components/TabItem";
import { View } from "react-native";
import { useTailwind } from "tailwind-rn";

const Tab = () => {
  const tailwind = useTailwind();
  const date = new Date();
  const nowYear = date.getFullYear();
  const thisMonth = date.getMonth() + 1;

  let months = [];
  for (let i = 1; i < 12; i++) {
    const month =
      0 < thisMonth - i
        ? (thisMonth - i).toString()
        : (12 + thisMonth - i).toString();
    const path = nowYear.toString() + "-" + month;
    months.push(
      <TabItem
        text={month + "月"}
        href={"/data/" + path}
        key={month}
        isActive={false}
      />
    );
  }

  return (
    <>
      <View
        style={tailwind(
          "fixed top-12 pr-[45vw] flex-row-reverse left-0 z-10 flex h-16 w-full items-center overflow-y-hidden overflow-x-scroll bg-sub-color md:top-20"
        )}
      >
        <TabItem text={thisMonth.toString() + "月"} href="/" isActive={false} />

        {months}
      </View>
      <View style={tailwind("h-16")}></View>
    </>
  );
};

export default Tab;
