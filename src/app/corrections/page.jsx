"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { BookOpen, FileText } from "lucide-react";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";

const page = () => {
  const { t } = useTranslation();
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">
        {t("correction-p.A1")}
      </h1>
      <p className="text-lg text-center mb-8">{t("correction-p.A2")}</p>
      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <FileText className="mr-2" />
              {t("correction-p.A3")}
            </CardTitle>
            <CardDescription>{t("correction-p.A4")} </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">{t("correction-p.A5")} </p>
            <Link href="/corrections/exams">
              <Button className="w-full bg-blue-500 hover:bg-blue-400">
                {t("correction-p.A6")}
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <BookOpen className="mr-2" />
              {t("correction-p.A7")}
            </CardTitle>
            <CardDescription>{t("correction-p.A8")} </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">{t("correction-p.A9")} </p>
            <Link href="/corrections/textbooks">
              <Button className="w-full bg-blue-500 hover:bg-blue-400">
                {t("correction-p.A10")}
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default page;
