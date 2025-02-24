import { MessageSquare ,PhoneCallIcon} from 'lucide-react'
import React, { useEffect } from 'react'
import { useChatStore } from '../store/useChatStore'
import { useAuthStore } from '../store/useAuthStore';

const CallContainer = () => {

   const {selectedUser ,users} =useChatStore();
   const {onlineUsers} = useAuthStore();

   useEffect(() => { 
    console.log(selectedUser);
    })
  return (
    <div className="w-full flex flex-1 flex-col items-center justify-center p-16 bg-base-100/50">
      <div className="max-w-md text-center space-y-6">
        {/* Icon Display */}
        <div className="flex justify-center gap-4 mb-4">
          <div className="relative">
            <div
              className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center
             justify-center animate-bounce"
            >
              <PhoneCallIcon className="w-8 h-8 text-primary " />
            </div>
          </div>
        </div>
        <img
        src={"/avatar.png"}
        alt={name}
        className="size-24 object-cover rounded-full mx-auto"
        />

        {/* Welcome Text */}
        {/* User logo */}
        {/* <div className="relative mx-auto"> */}
            
        {/* </div> */}
        {/* <h3 className="font-medium">{selectedUser.fullName}</h3> */}
        <h3>XYZ</h3>
        <p className="text-base-content/60">
          {/* {onlineUsers.includes(selectedUser) ? "Ringing...." : "Calling...."} */}
        </p>
      </div>
    </div>
  )
}

export default CallContainer;