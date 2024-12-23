import React from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import {Popover,PopoverContent,PopoverTrigger} from "@/components/ui/popover";
import { LogOut, User2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function navbar() {
  
  const {user} = useSelector(store => store.auth);

  return (
    <div className="bg-white">
      <div className="flex items-center justify-between mx-auto max-w-5xl h-16">
        <div>
          <h1 className="text-2xl font-bold">
            Elev8
            <span className="text-[#F83002]">Jobs</span>
          </h1>
        </div>



        <div className="flex items-center gap-9">
          <ul className="flex font-medium items-center gap-5">
            <li> <Link to="/" >Home</Link> </li>
            <li> <Link to="/jobs" >Jobs</Link> </li>
            <li> <Link to="/browse">Browse </Link> </li>
          </ul>

          {!user ? (
            <div className="flex items-center gap-2">
              <Link to="/login" ><Button variant="outline">Login</Button></Link>
              <Link to="/signup" ><Button className="bg-[#6A38C2] hover:bg-[#4e2693] text-white  " >SignUp</Button></Link>
            </div>
          ) : (
            <Popover>
              <PopoverTrigger asChild>
                <Avatar className="cursor-pointer">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                </Avatar>
              </PopoverTrigger>

              <PopoverContent className="w-80">
                <div className="flex items-center gap-3">
                  <Avatar Avatar className="cursor-pointer">
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                  </Avatar>
                  <div>
                    <h4 className="font-medium"> Nayna Bisht </h4>
                    <p className="text-sm text-gray-500 ">
                      Lorem ipsum dolor sit amet.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col my-2 text-gray-600">
                  <div className="flex w-fit items-center gap-2 cursor-pointer">
                    <User2 />
                    <Button variant="link"> <Link to="/profile">View Profile</Link> </Button>
                  </div>

                  <div className="flex w-fit items-center gap-2 cursor-pointer">
                    <LogOut />
                    <Button variant="link">Logout</Button>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          )}
        </div>
      </div>
    </div>
  );
}

export default navbar;
