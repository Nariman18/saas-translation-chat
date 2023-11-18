import DeleteChatButton from "./DeleteChatButton";
import InviteUser from "./InviteUser";

function AdminControls({ chatId }: { chatId: string }) {
  return (
    <div className="flex sm:justify-end justify-center space-x-2 sm:p-5 p-2 mb-0">
      <InviteUser chatId={chatId} />
      <DeleteChatButton chatId={chatId} />
    </div>
  );
}

export default AdminControls;
