export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFB] flex items-center justify-center px-4 py-8 sm:px-6 lg:px-10">
      <div className="w-full max-w-3xl rounded-[40px] bg-white px-6 py-8 shadow-[0_24px_60px_rgba(0,0,0,0.08)] text-center sm:px-8 sm:py-10">
        <h1 className="text-3xl font-bold text-[#1F3919] mb-4 sm:text-4xl">Welcome to Your Dashboard</h1>
        <p className="text-base text-gray-600 leading-7 sm:text-lg">
          You have successfully continued with Google, Apple, or as a guest. Use the menu or app navigation to continue your experience.
        </p>
      </div>
    </main>
  );
}
