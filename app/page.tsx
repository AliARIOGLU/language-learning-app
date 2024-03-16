import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="p-4 flex flex-col gap-4 max-w-[200px]">
      <Button>Button</Button>
      <Button variant="primary">Button</Button>
      <Button variant="primaryOutline">Button</Button>
      <Button variant="secondary">Button</Button>
      <Button variant="secondaryOutline">Button</Button>
    </div>
  );
}
