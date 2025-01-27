import React from "react";
import { Metadata } from "next";

import { AuthHeaderSpotifyLogoSC } from "@/app/_components/(auth)/serverComponents/AuthHeaderSpotifyLogoSC";
import { RegisterEmailTitleSC } from "@/components/(auth)/serverComponents/RegisterEmailTitleSC";
import { RegisterSeperateOtherLoginWaySC } from "@/components/(auth)/serverComponents/RegisterSeperateOtherLoginWaySC";
import { AuthGoogleOauthButtonSC } from "@/app/_components/(auth)/serverComponents/AuthGoogleOauthButtonSC";
import { RegisterMoveToLoginPageButtonSC } from "@/app/_components/(auth)/serverComponents/RegisterMoveToLoginPageButtonSC";

import { RegisterEmailForm } from "@/app/_components/(auth)/clientComponents/forms/RegisterEmailForm";

export const metadata: Metadata = {
  title: "Register",
};

export default function RegisterEmail() {
  return (
    <div className="flex flex-col items-center max-w-md mx-auto text-center bg-white min-h-screen font-bold">
      <AuthHeaderSpotifyLogoSC />
      <RegisterEmailTitleSC />
      <RegisterEmailForm />
      <RegisterSeperateOtherLoginWaySC />
      <AuthGoogleOauthButtonSC buttonSize="w-3/4 sm:w-full" />
      <RegisterMoveToLoginPageButtonSC />
    </div>
  );
}
