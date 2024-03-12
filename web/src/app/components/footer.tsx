import { FC } from "react";

export const Footer: FC = () => {
  return (
    <div className="text-center flex flex-col items-center text-xs text-zinc-700 gap-1">
      <div className="text-zinc-400">
        Answer generated by large language models.
      </div>
      <div className="text-zinc-400">
        If you have any questions, please contact liuxin’s email address neu_liuxin@163.com
      </div>
    </div>
  );
};
