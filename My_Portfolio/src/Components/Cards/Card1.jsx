import React from 'react'

const Card1 = ({name="shri ram",para,from}) => {
    const img = `https://pbs.twimg.com/media/GEbcSqia4AAcNCL?format=jpg&name=900x900`
  return (
    <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p- dark:bg-slate-800">
        <img
          className="w-24 h-24 rounded-full mx-auto"
          src={img}
          alt=""
          width="384"
          height="512"
        />
        <div className="pt-6 text-center space-y-4">
          <blockquote>
            <p className="text-lg font-medium">
              {name}
            </p>
          </blockquote>
          <figcaption className="font-medium">
            <div className="text-sky-500 dark:text-sky-400">{para || 'ram lalla from aayodha in 2024'}</div>
            <div className="text-slate-700 dark:text-slate-500">
                {from}
            </div>
          </figcaption>
        </div>
      </figure>
  )
}

export default Card1;