import CustomersTable from "@/app/ui/customers/table";
import { CustomersTableSkeleton } from "@/app/ui/skeletons";
import {lusitana} from "@/app/ui/fonts";
import Search from "@/app/ui/search";
import {Suspense} from "react";

type SearchParameters = {
    searchParams?: Promise<{
        query?: string;
        page?: string;
    }>;
};

export default async function Page(params: SearchParameters) {
    const searchParams = await params.searchParams;
    const query = searchParams?.query || '';
    const currentPage = Number(searchParams?.page) || 1;

    return (
        <div className="w-full">
            <h1 className={`${lusitana.className} mb-8 text-xl md:text-2xl`}>
                Customers
            </h1>
            <Search placeholder="Search customers..." />
            <Suspense key={query + currentPage} fallback={<CustomersTableSkeleton />}>
                <CustomersTable query={query} />
            </Suspense>
        </div>
    );
}