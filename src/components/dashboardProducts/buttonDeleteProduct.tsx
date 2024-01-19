import { Trash2 } from 'lucide-react';

export default function ButtonDeleteProduct() {
    return (
        <button
            type="button"
            className="p-3 transition ease-in delay-250 hover:bg-red-500 rounded"
        >
            <Trash2 />
        </button>
    );
}