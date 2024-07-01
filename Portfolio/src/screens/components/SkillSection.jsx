import React from 'react'

function SkillBar({name,percent,color}) {
    return (
        <div className='w-full flex flex-col gap-y-3 my-5'>
            <div className='flex justify-between font-oswald text-lg font-semibold'>
                <span>{name}</span>
                <span>{percent}</span>
            </div>
            <div className='bg-slate-700 h-1 w-full'>
                <div className='h-full' style={{boxShadow:color+" 1px 1px 15px",backgroundColor:color,width:percent+"%"}}></div>
            </div>
        </div>
    )
}
export default function SkillSection({id}) {
  return (
    <div className='min-h-screen w-full flex flex-col justify-evenly items-center gap-10 my-40' id={id}>
        <div className='text-5xl font-oswald'>Skills</div>
        <div className='h-full w-full flex flex-row justify-evenly items-center'>
            <div className='flex flex-col w-2/5'>
                <SkillBar color="#03fcf4" percent="90" name="HTML" />
                <SkillBar color="#fc035a" percent="60" name="CSS" />
                <SkillBar color="#03fcad" percent="80" name="Javascript" />
                <SkillBar color="#dbfc03" percent="60" name="C++" />
                <SkillBar color="#fc6b03" percent="90" name="Python" />
                <SkillBar color="#35fc03" percent="70" name="JQuery" />
                <SkillBar color="#035efc" percent="90" name="TailwindCSS" />
                <SkillBar color="#fc7b03" percent="90" name="Flask" />
                <SkillBar color="cyan" percent="80" name="NodeJS" />
            </div>
            <div className='flex flex-col w-2/5'>
                <SkillBar color="#8403fc" percent="90" name="ReactJS" />
                <SkillBar color="#ac02f5" percent="50" name="React Native" />
                <SkillBar color="#f50202" percent="60" name="Flutter" />
                <SkillBar color="cyan" percent="40" name="Php" />
                <SkillBar color="#df03fc" percent="50" name="Sql" />
                <SkillBar color="#f5b002" percent="40" name="Firebase" />
                <SkillBar color="#0277f5" percent="30" name="MongoDB" />
                <SkillBar color="#0277f5" percent="80" name="Git/Github" />
                <SkillBar color="#d1f502" percent="40" name="Docker" />
            </div>
        </div>
    </div>
  )
}
