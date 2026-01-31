import Filters from "./components/Filters";
import Grid from "./components/Grid";
// import HomePage from "./components/HomePage";

export default function Page(){
    return(
        <div className="min-h-screen bg-cream">
      {/* Page header with title + search */}
        {/* <HomePage /> */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
            <div className="flex flex-col lg:flex-row gap-8">
                {/* Sidebar filters */}
                <aside className="w-full lg:w-72 shrink-0">
                    <Filters />
                </aside>
                  {/* Product grid */}
                   <main className="flex-1 min-w-0">
                    <Grid />
                   </main>
            </div>
        </div>
        </div>
    )
}