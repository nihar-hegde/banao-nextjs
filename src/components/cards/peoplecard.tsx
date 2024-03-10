import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Button } from "../ui/button";

export const Peoplecard = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex gap-2">
          <Image
            src={"/people.svg"}
            alt="people"
            width={36}
            height={36}
            className="fill-current text-blue-500 hover:text-green-500"
          />
          People
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p>
          Find a teacher, coach, or expert for your hobby interest in your
          locality. Find a partner, teammate, accompanist or collaborator
        </p>
      </CardContent>
      <CardFooter>
        <Button variant={"outline"}>Connect</Button>
      </CardFooter>
    </Card>
  );
};
