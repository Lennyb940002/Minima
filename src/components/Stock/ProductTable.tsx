interface Product {
    title: string;
    reference: string;
    quantity: number;
    unitPrice: string;
    totalPrice: string;
    salePrice: string;
}

interface ProductTableProps {
    products: Product[];
}

export const ProductTable: React.FC<ProductTableProps> = ({ products }) => {
    return (
        <div className="overflow-x-auto">
            <table className="min-w-full table-auto border-collapse">
                <thead>
                    <tr className="bg-gray-800 text-white">
                        <th className="px-4 py-2">Titre Produit</th>
                        <th className="px-4 py-2">Référence</th>
                        <th className="px-4 py-2">Quantité</th>
                        <th className="px-4 py-2">Prix/U</th>
                        <th className="px-4 py-2">Prix total</th>
                        <th className="px-4 py-2">Prix Vente</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product, index) => (
                        <tr key={index} className="border-b border-white/20 text-white">
                            <td className="px-4 py-2">{product.title}</td>
                            <td className="px-4 py-2">{product.reference}</td>
                            <td className="px-4 py-2">{product.quantity}</td>
                            <td className="px-4 py-2">{product.unitPrice}</td>
                            <td className="px-4 py-2">{product.totalPrice}</td>
                            <td className="px-4 py-2">{product.salePrice}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
