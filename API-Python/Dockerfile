FROM ubuntu:trusty

RUN apt-get update \
    && apt-get install -y \
       python \
       python-pip \
       wget \
    && pip install Flask

RUN apt-get install -y python-reportlab

COPY src/ .

EXPOSE 5000
ENTRYPOINT ["python", "-u"]
CMD ["api.py"]
