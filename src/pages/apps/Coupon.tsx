import { FormEvent, useEffect, useState } from "react";
import AdminSIdebar from "../../components/AdminSIdebar";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";

const Coupon = () => {
    const [size, setSize] = useState<number>(8);
    const [prefix, setPrefix] = useState<string>("");
    const [includeNumber, setIncludeNumber] = useState<boolean>(false); 
    const [includeCharacter, setIncludeCharacter] = useState<boolean>(false); 
    const [includeSymbols, setIncludeSymbols] = useState<boolean>(false); 
    const [isCopied, setIsCopied] = useState<boolean>(false);
    const [coupon, setCoupon] = useState<string>("");

    const allLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    const allNumbers = "1234567890";
    const allSymbols = "@#$%^&*()_+";

    const copyText = async (coupon: string) => {
        await window.navigator.clipboard.writeText(coupon).then(() => toast.success("Copied to clipboard")).catch(() => toast.error("Error while copying"));
        setIsCopied(true);
    }

    useEffect(() => {
        setIsCopied(false);
    }, [coupon]);

    const submitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!includeNumber && !includeCharacter && !includeSymbols) {
            return toast.error("Please select one at least: Number, Char, or Symbol");
        }

        let result: string = prefix;
        const loopLength: number = size - result.length;

        for (let i = 0; i < loopLength; i++) {
            let entriesString: string = "";
            if (includeCharacter) entriesString += allLetters;
            if (includeNumber) entriesString += allNumbers;
            if (includeSymbols) entriesString += allSymbols;

            const randomNum: number = ~~(Math.random() * entriesString.length);
            result += entriesString[randomNum];
        }

        setCoupon(result);
    }

    return (
        <div className="adminContainer">
            <AdminSIdebar />
            <main className="admin-dashboard-app">
                <h1>Coupon</h1>
                <section>
                    <form className="coupon-form" onSubmit={submitHandler}>
                        <input type="text" placeholder="Text to include."
                            value={prefix} onChange={(e) => setPrefix(e.target.value)}
                            maxLength={size}
                        />
                        <input type="number" placeholder="Coupon Length"
                            value={size}
                            onChange={(e) => setSize(Number(e.target.value))}
                            min={8}
                            max={25}
                        />
                        <fieldset>
                            <legend>Include</legend>
                            <input type="checkbox"
                                checked={includeNumber}
                                onChange={() => setIncludeNumber((prev) => !prev)}
                            />
                            <span>Numbers</span>
                            <input type="checkbox"
                                checked={includeCharacter}
                                onChange={() => setIncludeCharacter((prev) => !prev)}
                            />
                            <span>Characters</span>
                            <input type="checkbox"
                                checked={includeSymbols}
                                onChange={() => setIncludeSymbols((prev) => !prev)}
                            />
                            <span>Symbols</span>
                        </fieldset>
                        <button type="submit">Generate</button>
                    </form>
                    {
                        coupon && <code>{coupon} <span onClick={() => copyText(coupon)}>{isCopied ? "Copied" : "Copy"} </span></code>
                    }
                </section>
            </main>
            <Toaster />
        </div>
    );
}

export default Coupon;
