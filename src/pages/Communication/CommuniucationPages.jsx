import { useEffect, useRef, useState } from 'react';

function CommunicationPages({ catchClickdata }) {
    const currentbills = [
        {
            id: 1,
            billNo: "CN-78945",
            title: "Consultation Fee – Dr. Smith",
            date: "Aug 15, 2023",
            status: "Pending",
            amount: 120.00,
        },
        {
            id: 2,
            billNo: "CN-78946",
            title: "Consultation Fee – Dr. Smith",
            date: "Aug 15, 2023",
            status: "Pending",
            amount: 150.00,
        },
        {
            id: 3,
            billNo: "CN-78947",
            title: "Consultation Fee – Dr. Smith",
            date: "Aug 15, 2023",
            status: "Pending",
            amount: 200.00,
        },
    ];
    const initialConversations = [
        {
            id: 1,
            name: "Dr. Robert Chen",
            text: "Can you please update the patien",
            time: "12m",
            initials: "RC",
            avatarColor: "bg-indigo-300",
            messages: [
                { id: 101, content: "Please connect Patient #1245's family to me at 12:00.", time: "10:15 AM", type: 'received' },
                { id: 102, content: "Noted. Will arrange a call.", time: "10:16 AM", type: 'sent' },
            ]
        },
        {
            id: 2,
            name: "Nurse Harsh Kumar",
            text: "ICU",
            time: "24m",
            initials: "HK",
            avatarColor: "bg-indigo-300",
            messages: [{ id: 201, content: "Is the patient stable?", time: "09:00 AM", type: 'received' }]
        },
        {
            id: 3,
            name: "Reception Desk",
            text: "Front Desk",
            time: "Yesterday",
            initials: "RD",
            avatarColor: "bg-indigo-300",
            messages: [{ id: 301, content: "Booking confirmation sent.", time: "4:30 PM", type: 'sent' }]
        },
    ];

    const [conversations, setConversations] = useState(initialConversations);
    const [selectedChat, setSelectedChat] = useState(initialConversations[0]);
    const [newMessage, setNewMessage] = useState('');
    const [isSidebarOpen, setSidebarOpen] = useState(window.innerWidth >= 640);
    const messagesEndRef = useRef(null);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [selectedChat?.messages.length, selectedChat]);

    const handleChatSelect = (chat) => {
        setSelectedChat(chat);
        if (window.innerWidth < 640) setSidebarOpen(false);
    };

    const handleSendMessage = (e) => {
        e.preventDefault();
        if (newMessage.trim() === '' || !selectedChat) return;

        const newMsg = {
            id: Date.now(),
            content: newMessage.trim(),
            time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
            type: 'sent',
        };

        setConversations(prev =>
            prev.map(conv =>
                conv.id === selectedChat.id
                    ? { ...conv, messages: [...conv.messages, newMsg], text: newMsg.content }
                    : conv
            )
        );

        setSelectedChat(prevChat => ({
            ...prevChat,
            messages: [...prevChat.messages, newMsg],
            text: newMsg.content
        }));

        setNewMessage('');
    };

    const Avatar = ({ initials, color }) => (
        <div className={`w-11 h-11 rounded-lg ${color} text-white font-bold flex items-center justify-center text-base mr-3 flex-shrink-0 shadow-sm`} style={{ aspectRatio: 1 }}>
            {initials}
        </div>
    );

    const MessageBubble = ({ type, text, time }) => {
        const isReceived = type === 'received';
        const bubbleClasses = isReceived
            ? 'bg-gray-100 text-gray-900 rounded-tr-xl rounded-br-xl rounded-tl-md rounded-bl-md self-start max-w-xs sm:max-w-md'
            : 'bg-indigo-50 border border-indigo-100 text-gray-900 rounded-tl-xl rounded-bl-xl rounded-tr-md rounded-br-md self-end ml-auto max-w-xs sm:max-w-md';

        return (
            <div className={`flex flex-col mb-3 ${isReceived ? 'mr-auto' : 'ml-auto'}`}>
                <div className={`px-4 py-3 text-sm shadow ${bubbleClasses}`}>{text}</div>
                <p className={`text-xs text-gray-400 mt-1 ${isReceived ? 'text-left pl-2' : 'text-right pr-2'}`}>{time}</p>
            </div>
        );
    };

    if (catchClickdata !== "Messaging") return null;

    return (
        <>
            {catchClickdata === "Messaging" && (
                <div className="flex h-screen bg-gray-50 mt-5 font-sans">
                    {/* Sidebar */}
                    <nav className={`${isSidebarOpen ? 'w-full sm:w-80 block' : 'hidden sm:block sm:w-80'} h-full border-r border-gray-100 bg-white flex flex-col flex-shrink-0 transition-all duration-300`}>
                        <div className="p-5 font-semibold text-lg border-b border-gray-100">Recent Conversations</div>
                        <div className="p-3 border-b border-gray-50">
                            <input
                                type="text"
                                placeholder="Search..."
                                className="w-full px-3 py-2 bg-gray-100 border border-transparent focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400 rounded-md text-sm outline-none"
                            />
                        </div>
                        <div className="flex-1 overflow-y-auto py-2">
                            {conversations.map((conv) => (
                                <div
                                    key={conv.id}
                                    className={`flex items-center p-3 cursor-pointer transition duration-150 rounded-lg
                ${selectedChat && selectedChat.id === conv.id
                                            ? 'bg-indigo-50'
                                            : 'hover:bg-gray-50 border-transparent'
                                        }`}
                                    onClick={() => handleChatSelect(conv)}
                                >
                                    <Avatar initials={conv.initials} color={conv.avatarColor} />
                                    <div className="flex-1 min-w-0">
                                        <p className="font-semibold text-sm text-gray-900 truncate">{conv.name}</p>
                                        <p className="text-xs text-gray-500 truncate mt-0.5">{conv.text}</p>
                                    </div>
                                    <p className="text-xs text-gray-400 ml-2 flex-shrink-0">{conv.time}</p>
                                </div>
                            ))}
                        </div>
                    </nav>

                    {/* Main Chat Area */}
                    <main className={`${!isSidebarOpen ? 'w-full flex' : 'hidden sm:flex'} flex-1 flex-col bg-white h-full`}>
                        {selectedChat ? (
                            <>
                                {/* Chat Header */}
                                <div className="flex items-center p-4 border-b border-gray-100 min-h-[65px]">
                                    {/* Back Button for Small Screens */}
                                    <button
                                        className="sm:hidden text-gray-500 hover:text-indigo-600 mr-3 p-1"
                                        onClick={() => setSidebarOpen(true)}
                                        aria-label="Open sidebar"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                                    </button>
                                    <Avatar initials={selectedChat.initials} color={selectedChat.avatarColor} />
                                    <p className="font-bold text-lg text-gray-800">{selectedChat.name}</p>
                                </div>

                                {/* Message Display Area */}
                                <div className="flex-1 p-6 overflow-y-auto space-y-4 flex flex-col">
                                    {selectedChat.messages.map(message => (
                                        <MessageBubble
                                            key={message.id}
                                            type={message.type}
                                            text={message.content}
                                            time={message.time}
                                        />
                                    ))}
                                    <div ref={messagesEndRef} />
                                </div>

                                {/* Chat Input Area */}
                                <form onSubmit={handleSendMessage} className="p-4 border-t border-gray-200 flex items-center flex-shrink-0 bg-gray-50">
                                    <button type="button" className="text-gray-500 hover:text-indigo-600 mr-3 p-2" aria-label="Attach file">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" /></svg>
                                    </button>
                                    <input type="file" id="chat-attachment" name="attachment" className="hidden" />
                                    <input
                                        type="text"
                                        placeholder="Type a message here..."
                                        className="flex-1 p-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none text-sm transition duration-150"
                                        value={newMessage}
                                        onChange={e => setNewMessage(e.target.value)}
                                        aria-label="Message input"
                                    />
                                    <button
                                        type="submit"
                                        className="ml-3 p-2 text-indigo-600 hover:text-indigo-800 transition duration-150"
                                        aria-label="Send message"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2z" /></svg>
                                    </button>
                                </form>
                            </>
                        ) : (
                            <div className="flex items-center justify-center flex-1 text-gray-500">
                                Select a conversation to start messaging.
                            </div>
                        )}
                    </main>
                </div>
            )}

            {catchClickdata === "Notifications" && (
                <div className="bg-white p-4 rounded-lg shadow-md mt-5">
                    {/* Header */}
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-lg font-semibold text-blue-900">
                            Current Bills
                        </h2>
                    </div>
                    <div className="w-full h-px bg-gray-200 my-3"></div>

                    {/* Appointment List */}
                    <div className="space-y-4">
                        {currentbills.map((appt) => (
                            <div
                                key={appt.id}
                                className="rounded-lg p-4 border border-gray-200 shadow-sm"
                            >
                                {/* Date + Status */}
                                <div className="flex justify-between items-center text-sm font-semibold text-gray-600">
                                    <p>Bill #: {appt.billNo}</p>
                                    <span
                                        className={`px-2 py-0.5 text-xs rounded ${appt.status === "Confirmed"
                                            ? "bg-green-100 text-green-700"
                                            : appt.status === "Completed"
                                                ? "bg-blue-100 text-blue-700"
                                                : "bg-yellow-100 text-yellow-700"
                                            }`}
                                    >
                                        {appt.status}
                                    </span>
                                </div>


                                {/* Separator */}
                                <div className="w-full h-px bg-gray-200 my-3"></div>

                                {/* Doctor Info + Actions */}
                                <div className="flex flex-col gap-2">
                                    {/* Row 1: Title & Amount */}
                                    <div className="flex justify-between items-center">
                                        <p className="text-gray-800 font-bold text-[15px]">{appt.title}</p>
                                        <p className="text-gray-900 font-semibold">${appt.amount}</p>
                                    </div>

                                    {/* Row 2: Date & Buttons */}
                                    <div className="flex justify-between items-center">
                                        <p className="text-sm text-gray-500">
                                            Date:{" "}
                                            <span className="text-gray-600 font-bold">{appt.date}</span>
                                        </p>

                                        <div className="flex gap-2">
                                            {/* View Button */}
                                            <button
                                                className="flex items-center gap-2 px-3 py-1 rounded-md text-white text-sm bg-[#6E59D9] hover:bg-[#5A46C8] transition"
                                                onClick={() => setshowdetails(true)}
                                            >
                                                <FaEye size={14} /> View
                                            </button>

                                            {/* Pay Now Button */}
                                            <button
                                                className="flex items-center gap-2 px-3 py-1 rounded-md text-white text-sm bg-green-600 hover:bg-green-700 transition"
                                                onClick={() => setShowModal(true)}
                                            >
                                                Pay Now
                                            </button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
}

export default CommunicationPages;
