import { Button } from "@/components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import Link from "next/link";

// Adding 'asChild' allows us to add a tag to the button, in this example adding <Link> inside button (making the whole button a Link tag)
export default function Home() {
  return (
    <>

      <h1 className="font-bold text-4xl mb-4">Home</h1>
      <Button type="button" variant={"outline"} size={"lg"} className="text-lg font-bold" asChild>
        <Link href={"/about"}>
          About!
        </Link>
      </Button>

      <div className="mt-2">
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              Open
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader className="text-4xl font-bold">
              Delete your account
            </DialogHeader>
            <DialogFooter className="sm:justify-start">
              <Button>
                Cancel
              </Button>
              <DialogClose asChild>
                <Button type="button" variant={"secondary"} className="bg-red-700/75">
                  Delete
                </Button>
              </DialogClose>
            </DialogFooter>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your account
              and remove your data from our servers.
            </DialogDescription>

          </DialogContent>
        </Dialog>
      </div>

    </>
  )
}
