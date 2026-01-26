import PageHeader from "@/components/PageHeader";
import UserAvatarSection from "./_components/UserAvatarSection";
import PersonalInformationSection from "./_components/PersonalInformationSection";
import AddressSection from "./_components/AddressSection";
import ActionButtonsSection from "./_components/ActionButtonsSection";

export default function ProfilePage() {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 pt-6 pb-4">
      <div className="space-y-6">
        {/* Page Header */}
        <PageHeader title="Profile settings" subtitle="Account info" />

        {/* User Avatar Section */}
        <UserAvatarSection />

        {/* Personal Information Section */}
        <PersonalInformationSection />

        {/* Address Section */}
        <AddressSection />

        {/* Action Buttons */}
        <ActionButtonsSection />
      </div>
    </div>
  );
}
